import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../services/api';
import { signIn as apiSignIn } from '../services/api';

type AuthContextType = {
    user: User | null;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const raw = localStorage.getItem('auth.user');
        return raw ? (JSON.parse(raw) as User) : null;
    });

    useEffect(() => {
        if (user) localStorage.setItem('auth.user', JSON.stringify(user));
        else localStorage.removeItem('auth.user');
    }, [user]);

    const signIn = async (username: string, password: string) => {
        const u = await apiSignIn(username, password);
        setUser(u);
    };

    const signOut = () => setUser(null);

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}

export default AuthProvider;