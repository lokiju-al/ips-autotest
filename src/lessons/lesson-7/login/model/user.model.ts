import { UserData } from '../data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        email: data.email,
        password: data.password,
    }
}

export {
    UserModel,
    createUserModel,
}