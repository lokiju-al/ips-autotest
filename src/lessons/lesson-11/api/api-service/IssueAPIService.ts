import { AxiosResponse } from "axios"
import { IssueModel } from "../../issues/model/issue.model"
import { CreateIssueRequest, IssueAPIDataProvider } from "../api-data-provider/IssueAPIDataProvider"
import { IssueAPIProvider } from "../api-provider/IssueAPIProvider"

type CreateIssueResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string,
}

type GetIssueResponse = [{
    html_url: string,
},]

class IssueAPIService {
    public static async createIssue(login: string, repo: string, issue: IssueModel): Promise<AxiosResponse<CreateIssueResponse>> {
        try {
            const data: CreateIssueRequest = IssueAPIDataProvider.getCreatedIssueData(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
            const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.createIssue(login, repo, data)
            return response
        } catch (error) {
            throw new Error(`Create an Issue failed ${error}`)
        }
    }

    public static async getIssue(login: string, repo: string): Promise<AxiosResponse<GetIssueResponse>> {
        try {
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
            const response: AxiosResponse<GetIssueResponse> = await issueAPIProvider.getIssue(login, repo)
            return response
        } catch (error) {
            throw new Error(`Get Issues failed ${error}`)
        }
    }
}

export {
    CreateIssueResponse,
    GetIssueResponse,
    IssueAPIService,
}