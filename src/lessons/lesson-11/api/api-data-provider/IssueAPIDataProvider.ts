import { IssueModel } from "../../issues/model/issue.model"

type CreateIssueRequest = {
    title: string | number,
    body?: string,
}

class IssueAPIDataProvider {
    public static getCreatedIssueData(issue: IssueModel): CreateIssueRequest {
        return {
            title: issue.title,
            body: issue.commentText,
        }
    }
}

export {
    IssueAPIDataProvider,
    CreateIssueRequest,
}