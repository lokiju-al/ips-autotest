import { ChainablePromiseElement } from 'webdriverio'

class EmailsPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/emails'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async uncheckPrivacy(): Promise<void> {
        if (await this.getPrivateToggle().isSelected()) await this.getPrivateToggle().click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getPrivateToggle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="toggle_visibility"]')
    }
}

export {
    EmailsPage,
}