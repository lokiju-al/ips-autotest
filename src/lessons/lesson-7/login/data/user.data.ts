import { LOGIN, EMAIL, PASSWORD, USER_URL } from '../../../../../credential'

type UserData = {
    login: string,
    email: string,
    password: string,
}

const userData: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
}

export {
    UserData,
    userData,
}