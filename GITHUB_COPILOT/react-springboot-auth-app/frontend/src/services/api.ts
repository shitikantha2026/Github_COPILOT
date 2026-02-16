import axios from 'axios';

export type User = {
    id?: number;
    username: string;
};

const API_URL = 'http://localhost:8080/api/auth/';

export const register = async (userData: { username: string; password: string; }): Promise<User> => {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data as User;
};

export const signIn = async (username: string, password: string): Promise<User> => {
    try {
        const response = await axios.post(`${API_URL}signin`, { username, password });
        return response.data as User;
    } catch (err: any) {
        if (err.response) {
            const msg = err.response.data ?? err.response.statusText ?? 'Sign in failed';
            throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
        }
        throw new Error(err.message || 'Network error');
    }
};