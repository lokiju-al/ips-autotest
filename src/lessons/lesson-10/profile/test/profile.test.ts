import { EmailsPage } from '../page-object/Emails.page'
import { LoginPage } from '../../login/page-object/Login.page'
import { OverviewPage } from '../page-object/Overview.page'
import { ProfilePage } from '../page-object/Profile.page'
import { emptyData, userData } from '../../login/data/user.data'
import { UserModel, createUserModel } from '../../login/model/user.model'
import { UserAPIService } from '../../api/api-service/UserAPIService'

describe('Public profile test', async () => {
    let emailsPage: EmailsPage
    let loginPage: LoginPage
    let overviewPage: OverviewPage
    let profilePage: ProfilePage
    const emptyModel: UserModel = createUserModel(emptyData)
    const user: UserModel = createUserModel(userData)
    const firstAvatarFilePath: string = 'src/files/first_avatar.jpg'
    const wrongAvatarFilePath: string = 'src/files/bmp_120x120_avatar_test.bmp'

    before(async () => {
        emailsPage = new EmailsPage(browser)
        loginPage = new LoginPage(browser)
        await UserAPIService.updateAuthenticatedUser(emptyModel)
        overviewPage = new OverviewPage(browser)
        profilePage = new ProfilePage(browser)
        await loginPage.open()
        await loginPage.login(user.login, user.password)
    })

    beforeEach(async () => {
        await profilePage.open()
    })

    it('User should be able to change Name', async () => {
        await profilePage.fillFieldName(user.name!)
        await profilePage.saveChanges()
        await overviewPage.open()

        expect(await overviewPage.getNameText()).toEqual(user.name!)
    })

    it('User should be able to change Bio', async () => {
        await profilePage.fillFieldBio(user.bio)
        await profilePage.saveChanges()
        await overviewPage.open()

        expect(await overviewPage.getBioText()).toEqual(user.bio!)
    })

    describe('Email settings test', async () => {
        before(async () => {
            await emailsPage.open()
            await emailsPage.uncheckPrivacy()
        })

        it('User should be able to set Email visible', async () => {
            await profilePage.open()
            await profilePage.fillEmailComboBox(user.email)
            await profilePage.saveChanges()
            await overviewPage.open()

            expect(await overviewPage.getEmailText()).toEqual(user.email)
        })
    })

    it('User should be able to change Pronouns', async () => {
        await profilePage.selectPronounsCombobox(user.pronouns!)
        await profilePage.saveChanges()
        await overviewPage.open()

        expect(await overviewPage.getPronounsText()).toEqual(user.pronouns!)
    })

    it('Avatar with proper type should be uploaded in profile', async () => {
        await profilePage.uploadAvatarFile(firstAvatarFilePath)
        const firstAvatarImagePath: string = await profilePage.getAvatarImagePath()
        await profilePage.uploadAvatarFile(user.avatarFilePath)
        const otherAvatarImagePath: string = await profilePage.getAvatarImagePath()

        expect(firstAvatarImagePath === otherAvatarImagePath).toEqual(false)
    })

    it('Avatar with wrong type should not be uploaded in profile', async () => {
        await profilePage.uploadWrongAvatarFile(wrongAvatarFilePath)

        expect(await profilePage.getAlertBadFileText()).toEqual('We only support PNG, GIF, or JPG pictures.')
    })

    after(async () => {
        await UserAPIService.updateAuthenticatedUser(emptyModel)
        await browser.reloadSession()
    })
})