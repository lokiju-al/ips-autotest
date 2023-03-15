import { LOGIN, PASSWORD, EMAIL } from '../../credential'

describe('Login form test', async () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login')
    })

    it('User should be log in with LOGIN', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(LOGIN)
        await browser.$('//*[@id="password"]').setValue(PASSWORD)
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        await browser.$('//summary//*[contains(@class, "avatar")]').waitForDisplayed({
            timeoutMsg: 'Avatar was not displayed'
        })
        await browser.$('//summary//*[contains(@class, "avatar")]').click()

        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(LOGIN)
    })

    it('User should be log in with EMAIL', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(EMAIL)
        await browser.$('//*[@id="password"]').setValue(PASSWORD)
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        await browser.$('//summary//*[contains(@class, "avatar")]').waitForDisplayed({
            timeoutMsg: 'Avatar was not displayed'
        })
        await browser.$('//summary//*[contains(@class, "avatar")]').click()

        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(LOGIN)
    })

    it('User should be log in with wrong PASSWORD', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })
        await browser.$('//*[@id="login_field"]').setValue(EMAIL)
        await browser.$('//*[@id="password"]').setValue('1234')
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        expect(await browser.$('//*[@role="alert"]').getText()).toBeDisplayed()
    })

    it('User should not be log in with empty fields', async () => {
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        await browser.$('//*[@type="submit"]').click()

        expect(await browser.$('//*[@role="alert"]').getText()).toBeDisplayed()
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})