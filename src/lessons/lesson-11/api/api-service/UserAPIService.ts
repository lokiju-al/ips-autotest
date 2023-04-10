import { AxiosResponse } from "axios"
import { UserModel } from "../../login/model/user.model"
import { UpdateUserRequest, UserAPIDataProvider } from "../api-data-provider/UserAPIDataProvider"
import { UserAPIProvider } from "../api-provider/UserAPIProvider"

type UserResponse = {
    name: string,
    blog: string,
    bio: string,
}

class UserAPIService {
    public static async updateAuthenticatedUser(user: UserModel): Promise<AxiosResponse<UserResponse>> {
        try {
            const data: UpdateUserRequest = UserAPIDataProvider.getUpdatedUserData(user)
            const userAPIProvider: UserAPIProvider = new UserAPIProvider()
            const response: AxiosResponse<UserResponse> = await userAPIProvider.updateAuthenticatedUser(data)
            return response
        } catch (error) {
            throw new Error(`Update user by model failed ${error}`)
        }
    }
}

export {
    UserAPIService,
}