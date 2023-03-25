import { ChainablePromiseElement } from 'webdriverio'

class ProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async fillEmailComboBox(email: string): Promise<void> {
        await this.getEmailComboBox().waitForClickable({
            timeoutMsg: 'Email ComboBox was not clickable'
        })
        await this.getEmailComboBox().selectByVisibleText(email)
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

    public async getAlertBadFileText(): Promise<string> {
        await this.getAlertBadFile().waitForDisplayed({
            timeoutMsg: 'Alert bad file was not displayed'
        })
        return await this.getAlertBadFile().getText()
    }

    public async openUrl(): Promise<void> {
        await this.browser.url(this.url)
    }

    public saveAvatarImagePath(): Promise<string> {
        this.getAvatarImage().waitForDisplayed({
            timeoutMsg: 'Avatar was not displayed'
        })
        return this.getAvatarImage().getAttribute("src")
    }

    public async saveChanges(): Promise<void> {
        await this.getButtonUpdate().waitForClickable({
            timeoutMsg: 'Update button was not clickable'
        })
        await this.getButtonUpdate().click()
    }

    public async selectPronounsCombobox(pronouns: string): Promise<void> {
        await this.getPronounsCombobox().waitForDisplayed({
            timeoutMsg: 'Pronouns combobox was not clickable'
        })
        await this.getPronounsCombobox().selectByVisibleText(pronouns)
    }

    public async uploadAvatarFile(avatarPath: string): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await this.showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(avatarPath)
        await this.getInputFile().setValue(file)
        await this.getButtonSaveAvatar().waitForClickable({
            timeoutMsg: 'Avatar save button was not clickable'
        })
        await this.getButtonSaveAvatar().click()
    }

    public async uploadWrongAvatarFile(avatarPath: string): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await this.showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(avatarPath)
        await this.getInputFile().setValue(file)
    }

    private getAlertBadFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="upload-state color-fg-danger bad-file"]')
    }

    private getButtonSaveAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@value="save"]')
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

    private getInputFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
    }

    private getPronounsCombobox(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]')
    }

    private getAvatarImage(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="avatar-upload"]//img')
    }

    private async showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
        await browser.execute(() => {
            const htmlElement = document.querySelector('[type="file"]') as HTMLElement
            htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
        })
    }
}

export {
    ProfilePage,
}