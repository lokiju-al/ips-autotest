import { ChainablePromiseElement } from 'webdriverio'

class ProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async clickPronounsCombobox(): Promise<void> {
        await this.getPronounsCombobox().waitForClickable({
            timeoutMsg: 'Pronouns combobox was not clickable'
        })
        await this.getPronounsCombobox().click()
    }

    public async clickPronounsComboboxValue(): Promise<void> {
        await this.getPronounsComboboxValue().waitForClickable({
            timeoutMsg: 'Pronouns combobox value was not clickable'
        })
        await this.getPronounsComboboxValue().click()
    }

    public async fillEmailComboBox(email: string): Promise<void> {
        await this.getEmailComboBox().waitForClickable({
            timeoutMsg: 'Email ComboBox was not clickable'
        })
        await this.getEmailComboBox().setValue(email)
    }

    public async fillFieldBio(bio: string): Promise<void> {
        await this.getFieldBio().waitForDisplayed({
            timeoutMsg: 'Field Bio was not displayed'
        })
        await this.getFieldBio().setValue(bio)
    }

    public async fillFieldName(name: string): Promise<void> {
        await this.getFieldName().waitForDisplayed({
            timeoutMsg: 'Field Name was not displayed'
        })
        await this.getFieldName().setValue(name)
    }

    public async openUrl(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async saveChanges(): Promise<void> {
        await this.getButtonUpdate().waitForClickable({
            timeoutMsg: 'Update button was not clickable'
        })
        await this.getButtonUpdate().click()
    }

    private getButtonUpdate(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-target="waiting-form.submit"]')
    }

    private getEmailComboBox(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_email"]')
    }

    private getFieldBio(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_bio"]')
    }

    private getFieldName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
    }

    private getPronounsCombobox(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]')
    }

    private getPronounsComboboxValue(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]/option[@value = "he/him"]')
    }
}

export {
    ProfilePage,
}