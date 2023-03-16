import { ChainablePromiseElement } from 'webdriverio'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async openBrowser(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async loginFieldFill(login: string): Promise<void> {
        await this.getLoginField().setValue(login)
    }

    public async passwordFieldFill(password: string): Promise<void> {
        await this.getPasswordField().setValue(password)
    }

    public async loginButtonClick(): Promise<void> {
        await this.getLoginButton().click()
    }

    public getAlert(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@role="alert"]')
    }
    public getLoginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }
    public getLoginField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }
    private getPasswordField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }
}

export {
    LoginPage,
}