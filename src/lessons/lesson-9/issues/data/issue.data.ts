type IssueData = {
    title: string,
    commentFilePath: string,
    commentText: string,
    url: string,
    tag: string,
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

const issueData: IssueData = {
    title: `${mask}-title-${getStringTimestamp()}-${getRandomString(6)}`,
    commentFilePath: 'src/files/jpg_120x120_avatar_test.jpg',
    commentText: `${mask}-comment-${getStringTimestamp()}-${getRandomString(6)}`,
    url: '',
    tag: `${mask}-${getStringTimestamp()}-${getRandomString(6)}`
}

export {
    IssueData,
    issueData,
}