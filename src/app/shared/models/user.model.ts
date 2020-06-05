export interface LoginResponse {
  Error: string;
  ErrorCode: string;
  ErrorMessage: string;
  ProcessId: string;
  ProcessInstanceId: string;
  ProcessName: string;
  ProcessVariables: LoginProcessVariables;
  Status: string;
  WorkflowId: string;
}

export interface LoginProcessVariables {
  dbPassword: string;
  dbUserName: string;
  isFirstLogin: string;
  isInput: boolean;
  password: string;
  role: string;
  status: string;
  userId: string;
  userName: string;
}
