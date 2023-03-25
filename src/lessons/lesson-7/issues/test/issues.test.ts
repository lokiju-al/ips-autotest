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
        await loginPage.openUrl()
        await loginPage.fillFieldLogin(user.login)
        await loginPage.fillFieldPassword(user.password)
        await loginPage.clickButtonLogin()
    })

    beforeEach(async () => {
        await issuesPage.openUrl(issue.url)
    })

    it('User should be able to change Name', async () => {
        // await profilePage.fillFieldName(user.name)
        // await profilePage.saveChanges()
        // await overviewPage.openUrl()

        // expect(await overviewPage.getNameText()).toEqual(user.name)
    })

    after(async () => {
        await browser.reloadSession()
    })
})