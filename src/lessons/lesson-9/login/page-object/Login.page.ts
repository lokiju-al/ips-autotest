import { ChainablePromiseElement } from 'webdriverio'

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

    public async fillFieldLogin(login: string): Promise<void> {
        await this.getFieldLogin().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await this.getFieldLogin().setValue(login)
    }

    public async fillFieldPassword(password: string): Promise<void> {
        await this.getFieldPassword().waitForDisplayed({
            timeoutMsg: 'Password field was not displayed'
        })
        await this.getFieldPassword().setValue(password)
    }

    public getAlertText(): Promise<string> {
        return this.getAlert().getText()
    }

    public async openLoginPageUrlAndLogin(userLogin: string, userPassword: string): Promise<void> {
        await this.browser.url(this.url)
        await this.getFieldLogin().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await this.getFieldLogin().setValue(userLogin)
        await this.getFieldPassword().setValue(userPassword)
        await this.getButtonLogin().click()
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