import { AxiosResponse } from "axios"
import { LOGIN, REPO } from "../../../../../credential"
import { IssueModel } from "../../issues/model/issue.model"
import { CreateIssueRequest, IssueAPIDataProvider } from "../api-data-provider/IssueAPIDataProvider"
import { IssueAPIProvider } from "../api-provider/IssueAPIProvider"

type CreateIssueResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string,
}

class IssueAPIService {
    public static async createIssue(issue: IssueModel): Promise<AxiosResponse<CreateIssueResponse>> {
        try {
            const data: CreateIssueRequest = IssueAPIDataProvider.getCreatedIssueData(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
            const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.createIssue(LOGIN, REPO, data)
            return response
        } catch (error) {
            throw new Error(`Create an Issue failed ${error}`)
        }
    }
}

export {
    CreateIssueResponse,
    IssueAPIService,
}