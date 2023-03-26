import { LOGIN, PASSWORD, URL_ISSUES_PAGE } from '../../../../../credential'

type UserData = {
    login: string,
    password: string,
    urlIssuesPage: string,
}

const userData: UserData = {
    login: LOGIN,
    password: PASSWORD,
    urlIssuesPage: URL_ISSUES_PAGE
}

export {
    UserData,
    userData,
}