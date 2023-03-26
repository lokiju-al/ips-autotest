import { IssueData } from '../data/issue.data'

type IssueModel = {
    title: string,
    commentFilePath: string,
    commentText: string,
}

function createIssueModel(data: IssueData): IssueModel {
    return {
        title: data.title,
        commentFilePath: data.commentFilePath,
        commentText: data.commentText
    }
}

export {
    IssueModel,
    createIssueModel,
}