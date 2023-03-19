import { LoginPage } from '../page-object/Login.page'
import { ProfilePage } from '../page-object/Profile.page'
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'

describe('Login form test', async () => {
    let loginPage: LoginPage
    let profilePage: ProfilePage

    before(async () => {
        loginPage = new LoginPage(browser)
        profilePage = new ProfilePage(browser)
        await loginPage.fillFieldLogin(LOGIN)
        await loginPage.fillFieldPassword(PASSWORD)
        await loginPage.clickButtonLogin()
    })

    beforeEach(async () => {
        await profilePage.openUrl()
    })

    it('User should be log in with LOGIN', async () => {
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})