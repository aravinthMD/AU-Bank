export interface EntityResponse {
  ApplicationId: string;
  Error: string;
  ErrorCode: string;
  ErrorMessage: string;
  ProcessId: string;
  ProcessInstanceId: string;
  ProcessName: string;
  ProcessVariables: {
    activityList?: number[];
    blockLog?: [
      {
        action?: string;
        blockReason?: string;
        blokedBy?: string;
        channel?: string;
        comments?: string;
        id?: string;
        isBlocked?: string;
        mdata1?: string;
        mdata2?: string;
        mobile?: string;
        optId?: string;
        srNo?: string;
      }
    ];
    dbPassword: string;
    dbUserName: string;
    isFirstLogin: string;
    isInput: boolean;
    message?: { type?: string; value?: string };
    password: string;
    role: number;
    roleName: string;
    status: boolean;
    userId: number;
    userName: string;
  };
  Status: string;
  WorkflowId: string;
}

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
