import { LOGIN, PASSWORD } from '../../../../../credential'

type UserData = {
    login: string,
    password: string,
}

const userData: UserData = {
    login: LOGIN,
    password: PASSWORD,
}

export {
    UserData,
    userData,
}