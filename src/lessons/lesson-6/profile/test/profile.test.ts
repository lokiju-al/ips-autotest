import { EmailsPage } from '../page-object/Emails.page'
import { LoginPage } from '../page-object/Login.page'
import { OverviewPage } from '../page-object/Overview.page'
import { ProfilePage } from '../page-object/Profile.page'
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'

describe('Public profile test', async () => {
    let emailsPage: EmailsPage
    let loginPage: LoginPage
    let overviewPage: OverviewPage
    let profilePage: ProfilePage
    const filePath = 'src/files/itsmee.jpg'

    before(async () => {
        emailsPage = new EmailsPage(browser)
        loginPage = new LoginPage(browser)
        overviewPage = new OverviewPage(browser)
        profilePage = new ProfilePage(browser)
        await loginPage.openUrl()
        await loginPage.fillFieldLogin(LOGIN)
        await loginPage.fillFieldPassword(PASSWORD)
        await loginPage.clickButtonLogin()
    })

    beforeEach(async () => {
        await profilePage.openUrl()
    })

    // it('User should be able to change Name', async () => {
    //     await profilePage.fillFieldName('q')
    //     await profilePage.saveChanges()
    //     await overviewPage.openUrl()

    //     expect(await overviewPage.getNameText()).toEqual('q')
    // })

    // it('User should be able to change Bio', async () => {
    //     await profilePage.fillFieldBio('ё2')
    //     await profilePage.saveChanges()
    //     await overviewPage.openUrl()

    //     expect(await overviewPage.getBioText()).toEqual('ё2')
    // })

    it('User should be able to set Email visible', async () => {
        // await emailsPage.openUrl()
        // await emailsPage.uncheckPrivacy()
        await profilePage.openUrl()
        await profilePage.fillEmailComboBox(EMAIL)
        await profilePage.saveChanges()
        await overviewPage.openUrl()

        expect(await overviewPage.getEmailText()).toEqual(EMAIL)
    })

    // it('User should be able to change Pronouns', async () => {
    //     await profilePage.selectPronounsCombobox('he/him')
    //     await profilePage.saveChanges()
    //     await overviewPage.openUrl()

    //     expect(await overviewPage.getPronounsText()).toEqual('he/him')
    // })

    // it('Photo should be uploaded in profile', async () => {
    //     await profilePage.uploadFile(filePath)
    //     await browser.pause(100000)
    // })

    after(async () => {
        await browser.reloadSession()
    })
})