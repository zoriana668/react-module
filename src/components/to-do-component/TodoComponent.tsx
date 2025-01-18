import {FC} from 'react';
import {ITodo} from "../../models/ITodo.ts";
import './TodoComponent.css'

type TodoPropType = {
    item: ITodo;
}

export const TodoComponent:FC<TodoPropType> = ({item}) => {
    return (
        <div className={'todo-block my-3 cursor-copy shadow-md'}>
            <p className={'todo-id'}>{item.id}</p>
            <p className={'todo-title'}>{item.title}</p>
            <p className={'todo-completed'}>{item.completed}</p>
            <p className={'todo-user__id'}>{item.userId}</p>
        </div>
    );
};