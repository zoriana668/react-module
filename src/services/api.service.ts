import {ITodoList, ITodoListResponse} from "../models/ITodoList.ts";


export const getTodoLists = async (): Promise<ITodoListResponse[]> => {
    return await fetch(import.meta.env.VITE_DUMMY_API_URL)
        .then(value => value.json());
}

export const getTodoList = async (id: string): Promise<ITodoList> => {
    return await fetch(import.meta.env.VITE_DUMMY_API_URL + '/' + id)
        .then(value => value.json());
}