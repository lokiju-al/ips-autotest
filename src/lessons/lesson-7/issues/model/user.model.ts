import { UserData } from '../data/user.data'

type UserModel = {
    login: string,
    password: string,
    urlIssuesPage: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        password: data.password,
        urlIssuesPage: data.urlIssuesPage
    }
}

export {
    UserModel,
    createUserModel,
}