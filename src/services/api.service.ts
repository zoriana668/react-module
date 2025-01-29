import {IUser} from "../models/IUsers.ts";


export const getAllUsers = async (page: string): Promise<IUser[]> => {
    return await fetch('https://dummyjson.com/users?page=' + page)
        .then(value => value.json())
}

