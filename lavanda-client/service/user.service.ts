import $api from '@/utils/http';
import { ConfirmCodeRequest, ConfirmResetPasswordRequest, LoginRequest, LoginResponse, RegistrationRequest, RegistrationResponse, SendConfirmCode } from '../interfaces/Auth';
import axios from 'axios';

export const API_URL = process.env.API_URL || "http://localhost:5000";

export async function registration(reqData: RegistrationRequest) {
    try {
        const { data } = await axios.post<RegistrationResponse>(
            `${API_URL}/auth/registration`,
            JSON.stringify(reqData),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function login(reqData: LoginRequest) {
    try {
        const { data, status } = await axios.post<LoginResponse>(
            `${API_URL}/auth/login`,
            JSON.stringify(reqData),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        const token = data.token;

        localStorage.setItem("token", token);

        return { data, status };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function sendRequestCode(reqData: ConfirmCodeRequest) {
    try {
        const { data, status } = await axios.post(
            `${API_URL}/auth/reset`,
            JSON.stringify(reqData),
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );

        return { data, status };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function sendConfirmCode(reqData: SendConfirmCode) {
    try {
        const { data } = await axios.post(
            `${API_URL}/auth/confirm`,
            JSON.stringify(reqData),
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );

        const token = data.token;

        localStorage.setItem("token", token);

        return data;
    } catch (error) {
        console.log('error message: ', error);
        return undefined;
    }
}

export async function changePassword(reqData: ConfirmResetPasswordRequest) {
    try {
        const { data } = await $api.post(
            `${API_URL}/auth/change`,
            JSON.stringify(reqData),
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );
        return data;
    } catch (error) {
        console.log('error message: ', error);
        return undefined;
    }
}