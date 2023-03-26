import { UserData } from '../data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
    urlOverviewPage: string,
    avatarFilePath: string,
    name: string,
    bio: string,
    pronouns: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        email: data.email,
        password: data.password,
        urlOverviewPage: data.urlOverviewPage,
        avatarFilePath: data.avatarFilePath,
        name: data.name,
        bio: data.bio,
        pronouns: data.pronouns,
    }
}

export {
    UserModel,
    createUserModel,
}