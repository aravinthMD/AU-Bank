export enum BUTTON_TEXTS {
  LOGIN_BUTTON_TEXT = "Login",
  SUBMIT_BUTTON_TEXT = "Submit",
  DISABLE_BUTTON_TEXT = "Disable",
  SEARCH_BUTTON_TEXT = "Search",
  DOWNLOAD_BUTTON_TEXT = "Download",
  LAUNCH_BUTTON_TEXT = "Launch",
  BLOCK_BUTTON_TEXT = "Block",
  CONFIRM_BUTTON_TEXT = "Confirm",
  CANCEL_BUTTON_TEXT = "Cancel",
  CLOSE_BUTTON_TEXT = "Close",
  VIEW_BUTTON_TEXT = "View",
  ACTIVATE_BUTTON_TEXT = "Activate",
  DEACTIVATE_BUTTON_TEXT = "Deactivate",
  CHANGE_PASSWORD_BUTTON_TEXT = "Change password",
  EDIT_BUTTON_TEXT = "Edit",
  UPDATE_BUTTON_TEXT = "Update",
  REJECT_BUTTON_TEXT = "Reject",
}

export enum ROLES {
  SUPER_ADMIN = "Super Admin",
  ADMIN = "Admin",
  USER = "User",
}

export enum PAGES {
  PUBLIC = "/public",
  USER_CREATION = "/user-creation",
  VIEW_WHATSAPP = "/view-whatsapp",
  BLOCK_WHATSAPP = "/block-whatsapp",
  MARKETING_MAKER = "/marketing-maker",
  MARKETING_CHECKER = "/marketing-checker",
  CHANGE_PASSWORD = "/public/change-password",
}

export enum TOASTER_MESSAGES {
  LOGIN_SUCCESS = "Logged in successfully.",
  LOGOUT_SUCCESS = "Logged out successfully",
  CREATE_USER_SUCCESS = "User created successfully.",
  CHANGE_PASSWORD_WARNING = "Please change your old password.",
  USER_NOT_FOUND = "User not found",
  BLOCK_WHASTAPP_SUCCESS = "blocked successfully.",
  CHANGE_PASSWORD_SUCCESS = "Password changed successfully.",
  INVALID_CURRENT_PASSWORD = "Current password is not valid.",
  PASSWORD_MATCH_ERROR = "New password & Confirm password didn't match.",
  FETCH_USER_SUCCESS = "User fetched successfully.",
  DISABLE_USER_SUCCESS = "User disabled successfully.",
  UPDATE_USER_SUCCESS = "User updated successfully.",
  REPORT_DOWNLOAD_SUCCESS = "Report downloaded successfully.",
  CREATE_MESSAGE_TEMPLATE_SUCCESS = "Message template created successfully.",
  CREATE_PROMOTIONAL_TEMPLATE_SUCCESS = "Promotional template created successfully.",
  CREATE_PREAPPROVED_OFFER_SUCCESS = "Offer created successfully.",

  APPROVE_TEMPLATE_SUCCESS = "Template approved successfully.",
  REJECT_TEMPLATE_SUCCESS = "Template rejected successfully.",

  TOKEN_EXPIRED_MESSAGE = "Token Expired.Please login again!",
}

export enum DATE_FORMATS {
  DD_MM_YYYY = "dd/mm/yyyy",
}

export enum RESPONSES {
  SUCCESS = "SUCCESS",
}

export enum MENU_TITLES {
  VIEW_WHATSAPP = "View Whatsapp",
  BLOCK_WHATSAPP = "Block Whatsapp",
  MARKETING_CHECKER = "Marketing Checker",
  MARKETING_MAKER = "Marketing Maker",
}

export enum REPORT_FILTER_TYPES {
  ALL = "All",
  BLOCKED = "Blocked",
}

export enum CONCAT_HELPERS {
  USER_ID_CONCAT_HELPER = "@uataxisb.com",
}

export enum MESSAGES {
  NETWORK_NOT_AVAILABLE = "Network connection not available.",
}

export enum TEMPLATE_STATUS_CODES {
  SUBMITTED = "10",
  REJECTED = "20",
  APPROVED = "30",
  ALL = "40",
}
