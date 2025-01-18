import {FC} from "react";
import {ITodoList} from "../../models/ITodoList.ts";
import './TodoComponent.css';

type TodoListPropType = {
    item: ITodoList;
}

export const TodoComponent:FC<TodoListPropType> = ({item}) => {
    return (
        <div className={'item-block my-5'}>
            <p className={'item-id'}>{item.id}</p>
            <p className={'item-todo'}>{item.todo}</p>
            <p className={'item-completed'}>{item.completed}</p>
            <p className={'item-user-id'}>{item.userId}</p>
        </div>
    )
}