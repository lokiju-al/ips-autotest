type IssueData = {
    title: string,
    commentFilePath: string,
    commentText: string,
}

const issueData: IssueData = {
    title: 'Title 1',
    commentFilePath: 'src/files/jpg_120x120_avatar_test.jpg',
    commentText: 'Comment text 1 for issue Title 1'
}

export {
    IssueData,
    issueData,
}