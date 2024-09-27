export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const isValidPassword = (password: any) => PASSWORD_REGEX.test(password);

export const EMAIL_CHECK_REGEX = /\S+@\S+\.\S+/;

export const isValidEmail = (email: string) => EMAIL_CHECK_REGEX.test(email);
