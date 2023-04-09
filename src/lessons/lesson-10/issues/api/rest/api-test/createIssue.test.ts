import { AxiosResponse } from 'axios'
import { createIssueModel, IssueModel } from "../../../model/issue.model"
import { LOGIN, REPO } from '../../../../../../../credential'
import { CreateIssueResponse } from "../../../../api/api-service/IssueAPIService"
import { issueData } from '../../../data/issue.data'
import { IssueAPIProvider } from "../../../../api/api-provider/IssueAPIProvider"


describe('POST /repos/{owner}/{repo}/issues', () => {
    let issue: IssueModel

    beforeEach(async () => {
        issue = createIssueModel(issueData)
    })

    it('Issue should be created', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.create(
            LOGIN,
            REPO,
            {
                title: issue.title,
            },
        )

        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual(issue.state)

        const responseUrl: Response = await fetch(response.data.html_url)

        expect(responseUrl.status).toEqual(200)
    })
})