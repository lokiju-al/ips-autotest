import { ChainablePromiseElement } from 'webdriverio'

class ProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async openUrl(): Promise<void> {
        await this.browser.url(this.url)
    }

    // public getUserLoginText(): Promise<string> {
    //     return this.getUserLogin().getText()
    // }

    // public async openUserMenu(): Promise<void> {
    //     await this.getUserAvatar().waitForClickable({
    //         timeoutMsg: 'User avatar was not clickable'
    //     })
    //     await this.getUserAvatar().click()
    // }

    // private getUserAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
    //     return this.browser.$('//summary//*[contains(@class, "avatar")]')
    // }
    // private getUserLogin(): ChainablePromiseElement<WebdriverIO.Element> {
    //     return this.browser.$('//*[@class="css-truncate-target"]')
    // }
}

export {
    ProfilePage,
}