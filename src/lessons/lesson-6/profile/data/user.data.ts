import { LOGIN, EMAIL, PASSWORD, USER_URL } from '../../../../../credential'

type UserData = {
    login: string,
    email: string,
    password: string,
    userUrl: string,
    avatarPath: string,
    name: string,
    bio: string,
    pronouns: string,
}

const userData: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
    userUrl: USER_URL,
    avatarPath: 'src/files/jpg_120x120_avatar_test.jpg',
    pronouns: 'he/him',
    bio: 'ё2',
    name: 'Alex'
}

export {
    UserData,
    userData,
}