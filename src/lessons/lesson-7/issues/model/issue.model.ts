import { IssueData } from '../data/issue.data'

type IssueModel = {
    title: string,
    commentFilePath: string,
}

function createIssueModel(data: IssueData): IssueModel {
    return {
        title: data.title,
        commentFilePath: data.commentFilePath
    }
}

export {
    IssueModel,
    createIssueModel,
}