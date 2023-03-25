import { ChainablePromiseElement } from 'webdriverio'

class IssuesPage {
    protected browser: WebdriverIO.Browser

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

    public async openUrl(url: string): Promise<void> {
        await this.browser.url(url)
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
    IssuesPage,
}