const SESSION_STORAGE_KEY = '3legant_session';

const saveSession = (user, rememberMe = false) => {
    const storage = rememberMe
        ? localStorage
        : sessionStorage;

    storage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify(user)
    );
};

const getSession = () => {
    const persistentSession = localStorage.getItem(
        SESSION_STORAGE_KEY
    );

    if (persistentSession) {
        return JSON.parse(persistentSession);
    }

    const session = sessionStorage.getItem(
        SESSION_STORAGE_KEY
    );

    if (session) {
        return JSON.parse(session);
    }

    return null;
};

const clearSession = () => {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
};

export {
    saveSession,
    getSession,
    clearSession,
};