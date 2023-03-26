import { LoginPage } from '../page-object/Login.page'
import { IssuesPage } from '../page-object/Issues.page'
import { userData } from '../data/user.data'
import { UserModel, createUserModel } from '../model/user.model'
import { issueData } from '../data/issue.data'
import { IssueModel, createIssueModel } from '../model/issue.model'

describe('Issues test', async () => {
    let loginPage: LoginPage
    let issuesPage: IssuesPage
    const user: UserModel = createUserModel(userData)
    const issue: IssueModel = createIssueModel(issueData)

    before(async () => {
        loginPage = new LoginPage(browser)
        issuesPage = new IssuesPage(browser)
        await loginPage.openUrl()
        await loginPage.fillFieldLogin(user.login)
        await loginPage.fillFieldPassword(user.password)
        await loginPage.clickButtonLogin()
        await browser.pause(1000)
    })

    beforeEach(async () => {
        await issuesPage.openUrl(user.urlIssuesPage)
    })

    it('The user must be able to successfully create tasks with a valid number of characters in the title', async () => {
        await issuesPage.clickButtonNewIssue()
        await issuesPage.fillFieldTitle(issue.title)
        await issuesPage.clickButtonSubmitNewIssue()

        expect(await issuesPage.getIssueTitleText()).toEqual(issue.title)
    })
    // 'There was an error creating your Issue: title is too long (maximum is 256 characters).'
    after(async () => {
        await browser.reloadSession()
    })
})