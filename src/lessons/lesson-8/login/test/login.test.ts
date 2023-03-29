import { LoginPage } from '../page-object/Login.page'
import { MainPage } from '../page-object/Main.page'
import { userData } from '../data/user.data'
import { UserModel, createUserModel } from '../model/user.model'

describe('Login form test', async () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    const user: UserModel = createUserModel(userData)
    const invalidPassword: string = '1234'

    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })

    beforeEach(async () => {
        await loginPage.openUrl()
    })

    it('User should be log in with LOGIN/PASSWORD', async () => {
        await loginPage.fillFieldLogin(user.login)
        await loginPage.fillFieldPassword(user.password)
        await loginPage.clickButtonLogin()
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(user.login)
    })

    it('User should be log in with EMAIL/PASSWORD', async () => {
        await loginPage.fillFieldLogin(user.email)
        await loginPage.fillFieldPassword(user.password)
        await loginPage.clickButtonLogin()
        await mainPage.openUserMenu()

        expect(await mainPage.getUserLoginText()).toEqual(user.login)
    })

    it('User should not be log in with wrong PASSWORD', async () => {
        await loginPage.fillFieldLogin(user.login)
        await loginPage.fillFieldPassword(invalidPassword)
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