import { USERS } from '@data';

const USERS_STORAGE_KEY = '3legant_users';

const getUsers = () => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);

    if (!storedUsers) {
        localStorage.setItem(
            USERS_STORAGE_KEY,
            JSON.stringify(USERS)
        );

        return USERS;
    }

    return JSON.parse(storedUsers);
};

const saveUsers = (users) => {
    localStorage.setItem(
        USERS_STORAGE_KEY,
        JSON.stringify(users)
    );
};

const addUser = (user) => {
    const users = getUsers();

    const updatedUsers = [
        ...users,
        user,
    ];

    saveUsers(updatedUsers);

    return user;
};

export {
    getUsers,
    addUser,
};