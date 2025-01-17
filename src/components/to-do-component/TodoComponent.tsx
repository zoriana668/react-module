import {FC} from 'react';
import {ITodo} from "../../models/ITodo.ts";

type TodoPropType = {
    item: ITodo;
}

export const TodoComponent:FC<TodoPropType> = ({item}) => {
    return (
        <div>
            {item.id}
            {item.title}
            {item.completed}
            {item.userId}
        </div>
    );
};