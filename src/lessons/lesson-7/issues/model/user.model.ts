import { UserData } from '../data/user.data'

type UserModel = {
    login: string,
    password: string,
    urlIssuesPage: string,
    urlLabelsPage: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        password: data.password,
        urlIssuesPage: data.urlIssuesPage,
        urlLabelsPage: data.urlLabelsPage
    }
}

export {
    UserModel,
    createUserModel,
}