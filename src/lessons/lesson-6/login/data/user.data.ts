import { LOGIN, EMAIL, PASSWORD, USER_URL } from '../../../../../credential'

type UserData = {
    login: string,
    email: string,
    password: string,
    passwordWrong: string,
    userUrl: string,
    name: string,
    bio: string,
    pronouns: string,
}

const userData: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
    passwordWrong: '1234',
    userUrl: USER_URL,
    pronouns: 'he/him',
    bio: 'ё2',
    name: 'Alex'
}

export {
    UserData,
    userData,
}