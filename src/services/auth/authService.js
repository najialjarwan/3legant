import { USERS } from '@data';

let users = [...USERS];

const delay = (ms) => (
    new Promise(resolve => setTimeout(resolve, ms))
);

const toPublicUser = ({ password, ...user }) => user;

export const signIn = async ({ identifier, password }) => {
    await delay(500);

    const user = users.find(
        user =>
            (
                user.username === identifier ||
                user.email === identifier
            ) &&
            user.password === password
    );

    if (!user) {
        throw new Error(
            'Invalid username/email or password.'
        );
    }

    return toPublicUser(user);
};

export const signUp = async ({
    name,
    username,
    email,
    password,
}) => {
    await delay(500);

    const usernameExists = users.some(
        user => user.username === username
    );

    if (usernameExists) {
        throw new Error(
            'Username is already taken.'
        );
    }

    const emailExists = users.some(
        user => user.email === email
    );

    if (emailExists) {
        throw new Error(
            'Email is already registered.'
        );
    }

    const newUser = {
        id: Date.now(),
        name,
        username,
        email,
        password,
        avatar: '/images/users-avatar/default.png',
    };

    users.push(newUser);

    return toPublicUser(newUser);
};