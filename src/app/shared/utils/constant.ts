export enum BUTTON_TEXTS {
  LOGIN_BUTTON_TEXT = 'Login',
  SUBMIT_BUTTON_TEXT = 'Submit',
  RESET_PASSWORD_BUTTON_TEXT = 'Reset Password',
  CHANGE_PASSWORD_BUTTON_TEXT = 'Change Password',
  DISABLE_USER_BUTTON_TEXT = 'Disable User',
  SEARCH_BUTTON_TEXT = 'Search'
}

export enum ROLES {
  ADMIN = 'Admin',
  CALL_CENTER_ADMIN = 'CallCenter',
  MARKETING_ADMIN = 'Marketing',
}

export enum PAGES {
  PUBLIC = '/public',
  PUBLIC_CHANGE_PASSWORD = '/public/change-password',
  USER_CREATION = '/user-creation',
  BLOCK_WHATSAPP = '/block-whatsapp',
  DESIGN_TEMPLATE = '/design-template',
  CHANGE_PASSWORD = '/change-password',
}

export enum TOASTER_MESSAGES {
LOGIN_SUCCESS = 'Login Successfull',
FORGOT_PASSWORD_SUCCESS =  'An email has been sent with instructions to recover your password',
RESET_PASSWORD_SUCCESS = 'Reset password successfull',
PASSWORD_MATCH_ERROR = 'Password didn\'t match',
LOGOUT_SUCCESS = 'Logout successfull',
INVALID_CURRENT_PASSWORD = 'Invalid current password',
CHANGE_PASSWORD_SUCCESS = 'Change password successfull',
CREATE_USER_SUCCESS = 'Create user successfull',
FETCH_USER_SUCCESS = 'User fetch successfull',
DISABLE_USER_SUCCESS = 'User disabled successfull',
CHANGE_PASSWORD_WARNING = 'Please change your password',
}
