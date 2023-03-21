import { ChainablePromiseElement } from 'webdriverio'
import { UserModel } from '../model/user.model'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async clickButtonLogin(): Promise<void> {
        await this.getButtonLogin().waitForDisplayed({
            timeoutMsg: 'Login button was not displayed'
        })
        await this.getButtonLogin().click()
    }

    public async fillFieldEmail(user: UserModel): Promise<void> {
        await this.getFieldLogin().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await this.getFieldLogin().setValue(user.email)
    }

    public async fillFieldLogin(user: UserModel): Promise<void> {
        await this.getFieldLogin().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await this.getFieldLogin().setValue(user.login)
    }

    public async fillFieldPassword(user: UserModel): Promise<void> {
        await this.getFieldPassword().waitForDisplayed({
            timeoutMsg: 'Password field was not displayed'
        })
        await this.getFieldPassword().setValue(user.password)
    }

    public async fillFieldPasswordWrong(user: UserModel): Promise<void> {
        await this.getFieldPassword().waitForDisplayed({
            timeoutMsg: 'Password field was not displayed'
        })
        await this.getFieldPassword().setValue(user.passwordWrong)
    }

    public getAlertText(): Promise<string> {
        return this.getAlert().getText()
    }

    public async openUrl(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getAlert(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]')
    }
    private getButtonLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }
    private getFieldLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }
    private getFieldPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }
}

export {
    LoginPage,
}