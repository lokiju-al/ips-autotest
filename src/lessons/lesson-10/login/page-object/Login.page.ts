import { ChainablePromiseElement } from 'webdriverio'
import { Reporter } from '../../reporter/reporter'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async clickButtonLogin(): Promise<void> {
        Reporter.addStep('Подождать отображения поля Login')
        await this.getButtonLogin().waitForDisplayed({
            timeoutMsg: 'Login button was not displayed'
        })
        Reporter.addStep('Залогиниться')
        await this.getButtonLogin().click()
    }

    public async fillFieldLogin(userLogin: string): Promise<void> {
        Reporter.addStep('Подождать отображения поля Login')
        await this.getFieldLogin().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        Reporter.addStep(`Ввести логин ${userLogin}`)
        await this.getFieldLogin().setValue(userLogin)
    }

    public async fillFieldPassword(userPassword: string): Promise<void> {
        Reporter.addStep('Подождать отображения поля Password')
        await this.getFieldPassword().waitForDisplayed({
            timeoutMsg: 'Password field was not displayed'
        })
        Reporter.addStep(`Ввести пароль ${userPassword}`)
        await this.getFieldPassword().setValue(userPassword)
    }

    public getAlertText(): Promise<string> {
        Reporter.addStep('Найти сообщение об ошибке')
        return this.getAlert().getText()
    }
    //переименовать в login()
    public async login(userLogin: string, userPassword: string): Promise<void> {
        Reporter.addStep('Подождать отображения поля Login')
        await this.getFieldLogin().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        Reporter.addStep(`Ввести логин ${userLogin}`)
        await this.getFieldLogin().setValue(userLogin)
        Reporter.addStep(`Ввести пароль ${userPassword}`)
        await this.getFieldPassword().setValue(userPassword)
        Reporter.addStep('Залогиниться')
        await this.getButtonLogin().click()
    }

    public async open(): Promise<void> {
        Reporter.addStep('Открыть страницу логинации')
        await this.browser.url(this.url)
    }

    private getAlert(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]')
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
    LoginPage,
}