import { AxiosResponse } from 'axios'
import { createIssueModel, IssueModel } from "../../../model/issue.model"
import { CreateIssueResponse, IssueAPIService } from "../../../../api/api-service/IssueAPIService"
import { issueData } from '../../../data/issue.data'


describe('POST /repos/{owner}/{repo}/issues', () => {
    let issue: IssueModel

    beforeEach(async () => {
        issue = createIssueModel(issueData)
    })

    it('Issue should be created', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(issue)
        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual(issue.state)

        const responseUrl: Response = await fetch(response.data.html_url)

        expect(responseUrl.status).toEqual(200)
    })
})