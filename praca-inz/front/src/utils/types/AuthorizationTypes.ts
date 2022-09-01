

export enum USER_TYPE_ROLES {
    USER = 'USER',
    MODERATOR = 'MODERATOR',
    ADMIN = 'ADMIN',
    UNKNOWN = 'UNKNOWN'
}


export interface RegisterTypes {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    cityName: string,
    postalCode: string,
    role: USER_TYPE_ROLES
}