import { ChainablePromiseElement } from 'webdriverio'

class IssuesPage {
    protected browser: WebdriverIO.Browser

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async clickButtonNewIssue(): Promise<void> {
        await this.getButtonNewIssue().waitForClickable({
            timeoutMsg: 'Button New Issue was not clickable'
        })
        await this.getButtonNewIssue().click()
    }

    public async clickButtonSubmitNewIssue(): Promise<void> {
        await this.getButtonSubmitNewIssue().waitForClickable({
            timeoutMsg: 'Button Submit New Issue was not clickable'
        })
        await this.getButtonSubmitNewIssue().click()
    }

    public async fillFieldTitle(title: string): Promise<void> {
        await this.getFieldTitle().waitForDisplayed({
            timeoutMsg: 'Title field was not displayed'
        })
        await this.getFieldTitle().setValue(title)
    }

    public getIssueTitleText(): Promise<string> {
        return this.getIssueTitle().getText()
    }

    public async openUrl(url: string): Promise<void> {
        await this.browser.url(url)
    }
    




    
    private getIssueTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="js-issue-title markdown-title"]')
    }

    private getButtonNewIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-hotkey="c"]')
    }

    private getButtonSubmitNewIssue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="btn-primary btn ml-2"]')
    }

    private getFieldTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_title"]')
    }
}

export {
    IssuesPage,
}