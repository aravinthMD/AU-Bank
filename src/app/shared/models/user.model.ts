

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
  message?: { type?: string; value?: string };
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

export interface User {
  userId: number;
  created_at: string;
  role: string;
  username: string;
}
