import {IUser} from "../models/IUser.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async ():Promise<IUser[]> => {
    const users = await fetch(baseUrl)
        .then(value => value.json());
    return users;
}

export const getUser = async (id: string): Promise<IUser> => {
    const user = await fetch(baseUrl + '/' + id)
        .then(value => value.json());
    return user;
}