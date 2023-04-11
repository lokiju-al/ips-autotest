type IssueData = {
    title: string,
    commentFilePath: string,
    commentText: string,
    tag: string,
    state: string,
}

const issueData: IssueData = {
    title: '',
    commentFilePath: 'src/files/jpg_120x120_avatar_test.jpg',
    commentText: '',
    tag: '',
    state: 'open'
}

export {
    IssueData,
    issueData,
}