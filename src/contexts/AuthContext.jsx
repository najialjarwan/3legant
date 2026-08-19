import { createContext, useContext, useState } from 'react';
import {
    signInService,
    signUpService,
    saveSession,
    getSession,
    clearSession,
} from '@services';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => getSession());

    const signIn = async (credentials, rememberMe) => {
        const user = await signInService(credentials);

        setCurrentUser(user);
        saveSession(user, rememberMe);

        return user;
    };

    const signUp = async (userData) => {
        const user = await signUpService(userData);

        setCurrentUser(user);
        saveSession(user, false);

        return user;
    };

    const signOut = () => {
        clearSession();
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        isAuthenticated: currentUser !== null,
        signIn,
        signUp,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            'useAuth must be used within AuthProvider'
        );
    }

    return context;
};