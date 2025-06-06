import { IssueData } from '../data/issue.data'

type IssueModel = {
    title: string,
    commentFilePath: string,
    commentText: string,
    url: string,
    tag: string,
    state: string,
}

function createIssueModel(data: IssueData): IssueModel {
    return {
        title: data.title,
        commentFilePath: data.commentFilePath,
        commentText: data.commentText,
        url: data.url,
        tag: data.tag,
        state: data.state
    }
}

export {
    IssueModel,
    createIssueModel,
}