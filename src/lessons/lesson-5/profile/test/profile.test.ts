import { LoginPage } from '../page-object/Login.page'
import { MainPage } from '../page-object/Main.page'
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'

describe('Login form test', async () => {
    let loginPage: LoginPage
    let mainPage: MainPage

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach(async () => {
        await loginPage.openBrowser()
    })

    it('User should be log in with LOGIN', async () => {
        await loginPage.fillFieldLogin(LOGIN)
        await loginPage.fillFieldPassword(PASSWORD)
        await loginPage.clickButtonLogin()
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('User should be log in with EMAIL', async () => {
        await loginPage.fillFieldLogin(EMAIL)
        await loginPage.fillFieldPassword(PASSWORD)
        await loginPage.clickButtonLogin()
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('User should not be log in with wrong PASSWORD', async () => {
        await loginPage.fillFieldLogin(EMAIL)
        await loginPage.fillFieldPassword('1234')
        await loginPage.clickButtonLogin()

        expect(await loginPage.getAlertText()).toEqual('Incorrect username or password.')
    })

    it('User should not be log in with empty fields', async () => {
        await loginPage.clickButtonLogin()

        expect(await loginPage.getAlertText()).toEqual('Incorrect username or password.')
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})