import { IssueData } from '../data/issue.data'

type IssueModel = {
    title: string,
    commentFilePath: string,
    commentText: string,
    tag: string,
    state: string,
}

function createIssueModel(data: IssueData): IssueModel {
    return {
        title: data.title,
        commentFilePath: data.commentFilePath,
        commentText: data.commentText,
        tag: data.tag,
        state: data.state
    }
}

export {
    IssueModel,
    createIssueModel,
}