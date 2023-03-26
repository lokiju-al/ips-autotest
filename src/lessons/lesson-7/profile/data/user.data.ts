import { LOGIN, EMAIL, PASSWORD, URL_OVERVIEW_PAGE } from '../../../../../credential'

type UserData = {
    login: string,
    email: string,
    password: string,
    urlOverviewPage: string,
    avatarPath: string,
    name: string,
    bio: string,
    pronouns: string,
}

const userData: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
    urlOverviewPage: URL_OVERVIEW_PAGE,
    avatarPath: 'src/files/jpg_120x120_avatar_test.jpg',
    pronouns: 'he/him',
    bio: 'ё2',
    name: 'Alex'
}

export {
    UserData,
    userData,
}