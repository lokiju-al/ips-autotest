import { IssueData } from '../data/issue.data'

type IssueModel = {
    title: string,
    commentFilePath: string,
    commentText: string,
    tag: string,
    state: string,
}

const mask: string = 'issues'

function getStringTimestamp(): number {
    var date = new Date()
    return date.getTime()
}

function getRandomString(length: number): string {
    var randomString: string = ''
    var charSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for (let i = 1; i <= length; i++) {
        randomString += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    return randomString
}

function createIssueModel(data: IssueData): IssueModel {
    return {
        title: `${mask}-title-${getStringTimestamp()}-${getRandomString(6)}`,
        commentFilePath: data.commentFilePath,
        commentText: `${mask}-comment-${getStringTimestamp()}-${getRandomString(6)}`,
        tag: `${mask}-tag-${getStringTimestamp()}-${getRandomString(6)}`,
        state: data.state
    }
}

export {
    IssueModel,
    createIssueModel,
}