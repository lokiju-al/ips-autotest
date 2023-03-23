import { UserData } from '../data/user.data'

type UserModel = {
    login: string,
    email: string,
    password: string,
    userUrl: string,
    name: string,
    bio: string,
    pronouns: string,
}

function createUserModel(data: UserData): UserModel {
    return {
        login: data.login,
        email: data.email,
        password: data.password,
        userUrl: data.userUrl,
        name: data.name,
        bio: data.bio,
        pronouns: data.pronouns,
    }
}

export {
    UserModel,
    createUserModel,
}