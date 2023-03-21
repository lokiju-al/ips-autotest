import { EmailsPage } from '../page-object/Emails.page'
import { LoginPage } from '../page-object/Login.page'
import { OverviewPage } from '../page-object/Overview.page'
import { ProfilePage } from '../page-object/Profile.page'
import { userData } from '../data/user.data'
import { UserModel, createUserModel } from '../model/user.model'

describe('Public profile test', async () => {
    let emailsPage: EmailsPage
    let loginPage: LoginPage
    let overviewPage: OverviewPage
    let profilePage: ProfilePage
    const user: UserModel = createUserModel(userData)
    const filePath = 'src/files/itsmee.jpg'

    before(async () => {
        emailsPage = new EmailsPage(browser)
        loginPage = new LoginPage(browser)
        overviewPage = new OverviewPage(browser)
        profilePage = new ProfilePage(browser)
        await loginPage.openUrl()
        await loginPage.fillFieldLogin(user)
        await loginPage.fillFieldPassword(user)
        await loginPage.clickButtonLogin()
    })

    beforeEach(async () => {
        await profilePage.openUrl()
    })

    it('User should be able to change Name', async () => {
        await profilePage.fillFieldName(user)
        await profilePage.saveChanges()
        await overviewPage.openUrl()

        expect(await overviewPage.getNameText()).toEqual(user.name)
    })

    it('User should be able to change Bio', async () => {
        await profilePage.fillFieldBio(user)
        await profilePage.saveChanges()
        await overviewPage.openUrl()

        expect(await overviewPage.getBioText()).toEqual(user.bio)
    })

    it('User should be able to set Email visible', async () => {
        await emailsPage.openUrl()
        await emailsPage.uncheckPrivacy()
        await profilePage.openUrl()
        await profilePage.fillEmailComboBox(user)
        await profilePage.saveChanges()
        await overviewPage.openUrl()

        expect(await overviewPage.getEmailText()).toEqual(user.email)
    })

    it('User should be able to change Pronouns', async () => {
        await profilePage.selectPronounsCombobox(user)
        await profilePage.saveChanges()
        await overviewPage.openUrl()

        expect(await overviewPage.getPronounsText()).toEqual(user.pronouns)
    })

    // it('Photo should be uploaded in profile', async () => {
    //     await profilePage.uploadFile(filePath)
    //     await browser.pause(100000)
    // })

    after(async () => {
        await browser.reloadSession()
    })
})