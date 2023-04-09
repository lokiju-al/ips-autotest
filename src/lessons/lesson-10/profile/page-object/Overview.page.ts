import { ChainablePromiseElement } from 'webdriverio'
import { LOGIN } from '../../../../../credential'

class OverviewPage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}`
    
    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public getBioText(): Promise<string> {
        return this.getBio().getText()
    }

    public getEmailText(): Promise<string> {
        return this.getEmail().getText()
    }

    public getNameText(): Promise<string> {
        return this.getName().getText()
    }

    public getPronounsText(): Promise<string> {
        return this.getPronouns().getText()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getBio(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="p-note user-profile-bio mb-3 js-user-profile-bio f4"]')
    }

    private getEmail(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="Link--primary"]')
    }

    private getName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@itemprop="name"]')
    }

    private getPronouns(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@itemprop="pronouns"]')
    }
}

export {
    OverviewPage,
}