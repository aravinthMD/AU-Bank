export interface RequestEntity {
  processId: string;
  ProcessVariables: any;
  workflowId: string;
  projectId: string;
}

export interface TokenResponse {
  zid: number;
  roleType: number;
  aid: number;
  lastLoggedInDateTime: string;
  status: boolean;
  token: string;
}
