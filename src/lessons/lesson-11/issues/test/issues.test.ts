import { COMMENTATOR_LOGIN, COMMENTATOR_PASSWORD, LOGIN, REPO } from '../../../../../credential'
import { LoginPage } from '../../login/page-object/Login.page'
import { IssuesPage } from '../page-object/Issues.page'
import { LabelsPage } from '../page-object/Labels.page'
import { userData } from '../../login/data/user.data'
import { UserModel, createUserModel } from '../../login/model/user.model'
import { issueData } from '../data/issue.data'
import { IssueModel, createIssueModel } from '../model/issue.model'
import { AxiosResponse } from 'axios'
import { CreateIssueResponse, IssueAPIService } from "../../api/api-service/IssueAPIService"

describe('Issues test', async () => {
    let loginPage: LoginPage
    let issuesPage: IssuesPage
    let labelsPage: LabelsPage
    let issue: IssueModel
    const user: UserModel = createUserModel(userData)
    const tooLongTitle: string = '123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 12345'
    const invalidFile: string = 'src/files/exe_git-bash.exe'

    before(async () => {
        loginPage = new LoginPage(browser)
        issuesPage = new IssuesPage(browser)
        labelsPage = new LabelsPage(browser)
        await loginPage.open()
        await loginPage.login(user.login, user.password)
    })

    beforeEach(async () => {
        await issuesPage.open()
        issue = createIssueModel(issueData)
    })

    it('The user should be able to successfully create tasks with a valid number of characters in the title', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
        await browser.url(response.data.html_url)

        expect(await issuesPage.getIssueTitleText()).toEqual(issue.title)
    })

    it('The user should not be able to successfully create tasks with a 1025 character title', async () => {
        await issuesPage.clickButtonNewIssue()
        await issuesPage.fillFieldTitle(tooLongTitle)
        await issuesPage.clickButtonSubmitNewIssue()

        expect(await issuesPage.getAlertInvalidTitleText()).toEqual('There was an error creating your Issue: title is too long (maximum is 256 characters).')
    })

    it('The user should be able to successfully add valid format files to the task', async () => {
        await issuesPage.clickButtonNewIssue()
        await issuesPage.fillFieldTitle(issue.title)
        await issuesPage.uploadCommentFile(issue.commentFilePath)
        await issuesPage.clickButtonSubmitNewIssue()

        expect(await issuesPage.getCommentFileAttribute()).toEqual('_blank')
    })

    it('The user should not be able to successfully add invalid format files to the task', async () => {
        await issuesPage.clickButtonNewIssue()
        await issuesPage.uploadCommentFile(invalidFile)

        expect(await issuesPage.getAlertInvalidFileText()).toEqual('We don’t support that file type. Try again with a GIF, JPEG, JPG, MOV, MP4, PNG, SVG, WEBM, CSV, DOCX, FODG, FODP, FODS, FODT, GZ, LOG, MD, ODF, ODG, ODP, ODS, ODT, PATCH, PDF, PPTX, TGZ, TXT, XLS, XLSX or ZIP.')
    })

    describe('Comments test', async () => {
        it('The user should be able to leave comments if they are enabled', async () => {
            const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
            await issuesPage.signOut()
            await loginPage.open()
            await loginPage.login(COMMENTATOR_LOGIN, COMMENTATOR_PASSWORD)
            await browser.url(response.data.html_url)
            await issuesPage.fillFieldComment(issue.commentText)
            await issuesPage.clickButtonSaveComment()

            expect(await issuesPage.getSavedCommentText()).toEqual(issue.commentText)
        })

        it('The user should be able to block comments', async () => {//иты вынести в отдельный дескрайб
            const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
            await browser.url(response.data.html_url)
            await issuesPage.clickButtonLockComments()
            await issuesPage.clickButtonLockCommentsApply()
            await issuesPage.signOut()
            await loginPage.open()
            await loginPage.login(COMMENTATOR_LOGIN, COMMENTATOR_PASSWORD)
            await browser.url(response.data.html_url)
            //убрать зависимость от текста
            expect(await issuesPage.getMessageLockCommentsText()).toEqual('This conversation has been locked and limited to collaborators.')
        })

        afterEach(async () => {
            await issuesPage.signOut()
            await loginPage.open()
            await loginPage.login(user.login, user.password)
        })
    })

    it('The user should be able to close the issue', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
        await browser.url(response.data.html_url)
        await issuesPage.clickButtonCloseIssue()

        expect(await issuesPage.getMessageClosedIssueText()).toEqual('Closed')
    })

    it('The user should be able to find an issue by an existing tag', async () => {
        await labelsPage.open()
        await labelsPage.clickButtonNewLabel()
        await labelsPage.fillFieldLabelName(issue.tag)
        await labelsPage.clickButtonCreateLabel()
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
        await browser.url(response.data.html_url)
        await issuesPage.clickButtonLabels()
        await issuesPage.fillFieldFilterLabels(issue.tag)
        await issuesPage.clickButtonLabels()
        await labelsPage.open()
        await labelsPage.fillFieldSearchAllLabels(issue.tag)
        await labelsPage.clickButtonLabelByFilter()

        expect(await labelsPage.getButtonIssueFindByLabelText()).toEqual(issue.title)
    })

    it('The user should not be able to find a non-existent tag', async () => {
        await labelsPage.open()
        await labelsPage.fillFieldSearchAllLabels('Этот тег не существует')

        expect(await labelsPage.getMessageNoMatchingLabelsText()).toEqual('No matching labels')
    })

    it('The user should be able to delete a task', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(LOGIN, REPO, issue)
        await browser.url(response.data.html_url)
        await issuesPage.clickButtonDeleteIssue()
        await issuesPage.clickButtonDeleteIssueApply()
        await browser.url(response.data.html_url)

        expect(await issuesPage.getMessageDeletedIssueText()).toEqual('This issue has been deleted.')
    })
})