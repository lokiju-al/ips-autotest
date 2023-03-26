type IssueData = {
    title: string,
    commentFilePath: string,
    commentText: string,
    url: string,
    tag: string,
}

const issueData: IssueData = {
    title: 'Title 1',
    commentFilePath: 'src/files/jpg_120x120_avatar_test.jpg',
    commentText: 'Comment text 1 for issue Title 1',
    url: '',
    tag: 'Same text of issue & tag'
}

export {
    IssueData,
    issueData,
}