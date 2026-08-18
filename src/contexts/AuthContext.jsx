import { createContext, useContext, useState } from 'react';
import { signInService, signUpService } from '@services';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signIn = async (credentials) => {
        const user = await signInService(credentials);

        setCurrentUser(user);

        return user;
    };

    const signUp = async (userData) => {
        const user = await signUpService(userData);

        setCurrentUser(user);

        return user;
    };

    const signOut = () => {
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