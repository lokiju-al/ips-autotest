import { UserData } from '../data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
    urlOverviewPage: string,
    avatarPath: string,
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
        avatarPath: data.avatarPath,
        name: data.name,
        bio: data.bio,
        pronouns: data.pronouns,
    }
}

export {
    UserModel,
    createUserModel,
}