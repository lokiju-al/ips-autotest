import { LoginPage } from '../page-object/Login.page'
import { LOGIN, PASSWORD, EMAIL } from '../../../../../credential'

describe('Login form test', async () => {
    let loginPage: LoginPage

    before(async () => {
        loginPage = new LoginPage(browser)
    })

    beforeEach(async () => {
        await loginPage.openBrowser()
    })

    it('User should be log in with wrong PASSWORD', async () => {
        await loginPage.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await loginPage.loginFieldFill(EMAIL)
        await loginPage.passwordFieldFill('1234')
        await loginPage.getLoginButton().waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await loginPage.loginButtonClick()

        expect(await loginPage.getAlert().getText()).toBeDisplayed()
    })

    it('User should not be log in with empty fields', async () => {
        await loginPage.getLoginButton().waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await loginPage.loginButtonClick()

        expect(await loginPage.getAlert().getText()).toBeDisplayed()
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})