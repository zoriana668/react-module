import {IUser} from "../models/IUser.ts";

export const getUsers = async ():Promise<IUser[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return users;
}

export const getUser = async (id: string): Promise<IUser> => {
    const user = await fetch('https://jsonplaceholder.typicode.com/users' + id)
        .then(value => value.json());
    return user;
}