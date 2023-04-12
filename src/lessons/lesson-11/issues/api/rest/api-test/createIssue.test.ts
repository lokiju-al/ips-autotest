import { AxiosResponse } from 'axios'
import { createIssueModel, IssueModel } from "../../../model/issue.model"
import { CreateIssueResponse, GetIssueResponse, IssueAPIService } from "../../../../api/api-service/IssueAPIService"
import { issueData } from '../../../data/issue.data'
import { LOGIN, REPO } from '../../../../../../../credential'

describe('POST /repos/{owner}/{repo}/issues', () => {
    let issue: IssueModel

    beforeEach(async () => {
        issue = createIssueModel(issueData)
    })

    it('Issue should be created', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)

        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual(issue.state)

        const responseUrl: Response = await fetch(response.data.html_url)

        expect(responseUrl.status).toEqual(200)

        const getIssuesResponse: AxiosResponse<GetIssueResponse> = await IssueAPIService.getIssue(LOGIN, REPO)//переименовать в getIssuesResponse

        expect(getIssuesResponse.data.find(element => element.html_url === response.data.html_url)?.title).toEqual(issue.title)//привязаться к IssueModel
    })

    it('Issue should not be created in a repository where the ability to create issues is disabled', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(LOGIN, 'autotest-ips-1', issue)

        expect(response.status).toEqual(410)
    })

    it('Issue should not be created in a private repository', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue('lokiju-al', 'Private-repo', issue)

        expect(response.status).toEqual(404)
    })

    it('Issue should not be created if users are not be able to interact with the repository', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue('lokiju-al', 'autotest-ips', issue)

        expect(response.status).toEqual(422)
    })
})