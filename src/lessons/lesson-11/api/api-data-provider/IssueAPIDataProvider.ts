import { IssueModel } from "../../issues/model/issue.model"

type CreateIssueRequest = {
    title: string | number,
}

class IssueAPIDataProvider {
    public static getCreatedIssueData(issue: IssueModel): CreateIssueRequest {
        return {
            title: issue.title,
        }
    }
}

export {
    IssueAPIDataProvider,
    CreateIssueRequest,
}