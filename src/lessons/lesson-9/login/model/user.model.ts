import { UserData } from '../data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
    urlOverviewPage: string,
    urlIssuesPage: string,
    urlLabelsPage: string,
    avatarFilePath: string,
    pronouns: string,
    bio: string,
    name: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        email: data.email,
        password: data.password,
        urlOverviewPage: data.urlOverviewPage,
        urlIssuesPage: data.urlIssuesPage,
        urlLabelsPage: data.urlLabelsPage,
        avatarFilePath: data.avatarFilePath,
        pronouns: data.pronouns,
        bio: data.bio,
        name: data.name,
    }
}

export {
    UserModel,
    createUserModel,
}