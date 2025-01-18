import {ITodo} from "../models/ITodo.ts";

export const getTodoLists = async ():Promise<ITodo[]> => {
    return await fetch(import.meta.env.VITE_API_URL_TODO)
        .then(value => value.json());
}

export const getTodoList = async (id: string): Promise<ITodo> => {
    return await fetch(import.meta.env.VITE_API_URL_TODO + '/' + id)
        .then(value => value.json());
}