export interface RegistrationRequest {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    birthDay: Date
}

export interface LoginRequest {
    email: string,
    password: string,
}

export interface LoginResponse {
    token: string;
}

export interface RegistrationResponse {
    token: string;
}

export interface ConfirmCodeRequest {
    email: string;
}

export interface SendConfirmCode {
    email: string;
    code: number;
}

export interface ConfirmResetPasswordRequest {
    email: string;
    password: string,
    code: number
}