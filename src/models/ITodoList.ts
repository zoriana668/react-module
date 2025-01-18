export interface ITodoList {
    id: number;
    todo: string;
    completed: boolean;
    userId: number
}

export interface ITodoListResponse {
    todos: ITodoList[];
}