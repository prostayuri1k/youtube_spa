import {instance} from "./instance.ts";

export type LoginData = {
    email: string;
    password: string;
}

export const usersApi = {
    login(loginData: {email: string, password: string}) {
        return instance.post('auth/login', loginData)
    }
}

