import { IssueData } from '../data/issue.data'

type IssueModel = {
    title: string,
}

function createIssueModel(data: IssueData): IssueModel {
    return {
        title: data.title,
    }
}

export {
    IssueModel,
    createIssueModel,
}