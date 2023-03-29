import { LOGIN, EMAIL, PASSWORD, URL_OVERVIEW_PAGE } from '../../../../../credential'

type UserData = {
    login: string,
    email: string,
    password: string,
    urlOverviewPage: string,
    avatarFilePath: string,
    name: string,
    bio: string,
    pronouns: string,
}

const mask: string = 'profile'

function getStringTimestamp(): number {
    var date = new Date()
    return date.getTime()
}

function getRandomString(length: number): string {
    var randomString: string = ''
    var charSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for (let i = 1; i <= length; i++) {
        randomString += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    return randomString
}

const userData: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
    urlOverviewPage: URL_OVERVIEW_PAGE,
    avatarFilePath: 'src/files/jpg_120x120_avatar_test.jpg',
    pronouns: 'he/him',
    bio: `${mask}-bio-${getStringTimestamp()}-${getRandomString(6)}`,
    name: `${mask}-name-${getStringTimestamp()}-${getRandomString(6)}`
}

export {
    UserData,
    userData,
}