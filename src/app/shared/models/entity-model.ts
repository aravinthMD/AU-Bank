import { User } from "./user.model";

export interface EntityResponse {
  ApplicationId: string;
  Error: string;
  ErrorCode: string;
  ErrorMessage: string;
  ProcessId: string;
  ProcessInstanceId: string;
  ProcessName: string;
  ProcessVariables: {
    usersList?: User[];
    downloadContent?: string;
    remaining?: number;
    sent?: number;
    totalCount?: number;
    totalPages?: number;
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
    templateList: any[];
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
    total: number;
    code:number;
    launchedOn:any;
    more:boolean;
    templateIdList: any[]
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

export interface LoginResponse {
  Error?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
  ProcessId?: string;
  ProcessInstanceId?: string;
  ProcessName?: string;
  ProcessVariables: LoginProcessVariables;
  Status?: string;
  WorkflowId?: string;
}

export interface LoginProcessVariables {
  dbPassword: string;
  dbUserName: string;
  isFirstLogin?: string;
  isInput?: boolean;
  password: string;
  role?: string;
  roleName?: string;
  activityList?: number[];
  status?: string;
  userId: string;
  userName: string;
  message?: { type?: string; value?: string };
  payload?: { error?: string };
}
