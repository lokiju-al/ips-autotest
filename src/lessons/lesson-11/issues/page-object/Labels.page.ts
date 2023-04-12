import { ChainablePromiseElement } from 'webdriverio'
import { LOGIN, REPO } from '../../../../../credential'

class LabelsPage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}/${REPO}/labels`

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async confirmLabelCreation(): Promise<void> {
        await this.getButtonCreateLabel().waitForClickable({
            timeoutMsg: 'Button Create Label was not clickable'
        })
        await this.getButtonCreateLabel().click()
    }

    public async createLabel(): Promise<void> {
        await this.getButtonNewLabel().waitForClickable({
            timeoutMsg: 'Button New Label was not clickable'
        })
        await this.getButtonNewLabel().click()
    }

    public getButtonIssueFindByLabelText(): Promise<string> {
        return this.getButtonIssueFindByLabel().getText()
    }

    public getMessageNoMatchingLabelsText(): Promise<string> {
        return this.getMessageNoMatchingLabels().getText()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async searchLabels(labelName: string): Promise<void> {
        await this.getFieldSearchAllLabels().waitForDisplayed({
            timeoutMsg: 'Field Search All Labels was not displayed'
        })
        await this.getFieldSearchAllLabels().setValue(labelName)
        await browser.keys('Enter')
    }

    public async selectResultLabel(): Promise<void> {
        await this.getButtonLabelByFilter().waitForClickable({
            timeoutMsg: 'Button Label By Filter was not clickable'
        })
        await this.getButtonLabelByFilter().click()
    }

    public async setLabelName(labelName: string): Promise<void> {
        await this.getFieldLabelName().waitForDisplayed({
            timeoutMsg: 'Field Label Name was not displayed'
        })
        await this.getFieldLabelName().setValue(labelName)
    }

    private getButtonCreateLabel(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[contains(text(), "Create label")]')
    }

    private getButtonIssueFindByLabel(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-hovercard-type="issue"]')
    }

    private getButtonLabelByFilter(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="col-md-3 col-9"]')
    }

    private getButtonNewLabel(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="position-relative d-md-block d-none"]/button')
    }

    private getFieldLabelName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="label-name-"]')
    }

    private getFieldSearchAllLabels(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-issues-search"]')
    }

    private getMessageNoMatchingLabels(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="blankslate-heading"]')
    }
}

export {
    LabelsPage,
}