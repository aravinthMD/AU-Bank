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
  role: string;
  status?: string;
  userId: string;
  userName: string;
  message?: { type?: string; value?: string };
  menus ?: any;
}

export interface UserProcessVariables {
  createdAt: string;
  emailId: string;
  isUserId: string;
  newUserId: number;
  role: string;
  status: boolean;
  userId: number;
  username: string;
  lastLogin?: string;
  message?: { type: string; value: string };
}

export interface UserResponse {
  Error: string;
  ErrorCode: string;
  ErrorMessage: string;
  ProcessId: string;
  ProcessInstanceId: string;
  ProcessName: string;
  ProcessVariables: UserProcessVariables;
  Status: string;
  WorkflowId: string;
}
