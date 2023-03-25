import { ChainablePromiseElement } from 'webdriverio'
import { UserModel } from '../model/user.model'

class ProfilePage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async uploadProperAvatar(avatarPath: string): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await this.showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(avatarPath)
        await this.getInputFile().setValue(file)
    }

    private async showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
        await browser.execute(() => {
            const htmlElement = document.querySelector('[type="file"]') as HTMLElement
            htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
        })
    }

    private getInputFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
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

    public async openUrl(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async clickButtonEditAvatar(): Promise<void> {
        await this.getButtonEditAvatar().waitForClickable({
            timeoutMsg: 'Avatar edit button was not clickable'
        })
        await this.getButtonEditAvatar().click()
    }

    public async clickButtonRemoveAvatar(): Promise<void> {
        if (await this.getButtonRemoveAvatar().isClickable()) await this.getButtonRemoveAvatar().click()
    }

    public async clickButtonSaveAvatar(): Promise<void> {
        await this.getButtonSaveAvatar().waitForClickable({
            timeoutMsg: 'Avatar save button was not clickable'
        })
        await this.getButtonSaveAvatar().click()
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

    public async isButtonRemoveAvatarExists(): Promise<boolean> {
        if (await this.getButtonRemoveAvatar().isClickable()) return true
        return false
    }

    private getButtonEditAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="octicon octicon-pencil"]')
    }

    private getButtonRemoveAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@value="reset"]')
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

    private getPronounsCombobox(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]')
    }

    private getAvatarImage(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="avatar-upload"]//img')
    }

    public clickButtonSaveAvatar(): Promise<void> {
        await this.getButtonSaveAvatar().waitForClickable({
            timeoutMsg: 'Avatar save button was not clickable'
        })
        await this.getButtonSaveAvatar().click()
    }
}

export {
    ProfilePage,
}