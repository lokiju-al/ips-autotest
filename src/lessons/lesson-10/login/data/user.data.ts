import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'

type UserData = {
    login: string,
    email: string,
    password: string,
    avatarFilePath: string,
    pronouns: string,
    bio: string,
    name: string,
}

const mask: string = 'profile'

function getStringTimestamp(): number {
    var date = new Date()
    return date.getTime()
}

function getRandomNumber(): number {
    return Math.floor(Math.random() * 7)
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
    avatarFilePath: 'src/files/jpg_120x120_avatar_test.jpg',
    pronouns: 'he/him',
    bio: `${mask}-bio-${getStringTimestamp()}-${getRandomString(getRandomNumber())}`,
    name: `${mask}-name-${getStringTimestamp()}-${getRandomString(getRandomNumber())}`
}

const emptyData: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
    avatarFilePath: 'src/files/jpg_120x120_avatar_test.jpg',
    pronouns: 'he/him',
    bio: '',
    name: ''
}

export {
    UserData,
    userData,
    emptyData,
}