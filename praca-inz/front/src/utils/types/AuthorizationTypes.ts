

export enum USER_TYPE_ROLES {
    USER = 'USER',
    MODERATOR = 'MODERATOR',
    ADMIN = 'ADMIN',
    UNKNOWN = 'UNKNOWN'
}

export interface LoginValuesTypes {
    emailValue: string,
    passwordValue: string,
    confirmPasswordValue: string
}

export interface RegisterValuesTypes {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    cityName: string,
    postalCode: string,
    role: USER_TYPE_ROLES
}

export interface RegisterValidationValuesTypes {
    name: boolean,
    email: boolean,
    password: boolean,
    confirmPassword: boolean,
    cityName: boolean,
    postalCode: boolean
}

export interface LoginValidationValuesTypes {
    emailField: boolean,
    passwordField: boolean,
    confirmPasswordField: boolean
}