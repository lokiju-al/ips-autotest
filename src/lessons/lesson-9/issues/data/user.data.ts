import { LOGIN, PASSWORD, URL_ISSUES_PAGE, URL_LABLE_PAGE } from '../../../../../credential'

type UserData = {
    login: string,
    password: string,
    urlIssuesPage: string,
    urlLabelsPage: string,
}

const userData: UserData = {
    login: LOGIN,
    password: PASSWORD,
    urlIssuesPage: URL_ISSUES_PAGE,
    urlLabelsPage: URL_LABLE_PAGE
}

export {
    UserData,
    userData,
}