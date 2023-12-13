export const MAIL_REGEX = new RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
);
export const PHONE_REGEX = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
export const PASSWORD_REGEX = new RegExp(/^[a-zA-Z0-9.!@#$%&*_-]{5,30}$/);

export const MONGOOSE_ID = '[a-fA-F0-9]{24}';
