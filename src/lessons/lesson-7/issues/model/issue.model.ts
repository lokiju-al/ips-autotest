import { IssueData } from '../data/issue.data'

type IssueModel = {
    url: string,
}

function createIssueModel(data: IssueData): IssueModel {
    return {
        url: data.url,
    }
}

export {
    IssueModel,
    createIssueModel,
}