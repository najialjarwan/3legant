import { getUsers, addUser } from '@services';

const delay = (ms) => (
    new Promise(resolve => setTimeout(resolve, ms))
);

const toPublicUser = ({ password, ...user }) => user;

export const signIn = async ({ identifier, password }) => {
    await delay(500);

    const users = getUsers();

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

    const users = getUsers();

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
        id: crypto.randomUUID(),
        name,
        username,
        email,
        password,
        avatar: '/images/users-avatar/default.png',
    };

    addUser(newUser);

    return toPublicUser(newUser);
};