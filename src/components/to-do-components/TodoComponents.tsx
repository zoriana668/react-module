
import {useState, useEffect} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../to-do-component/TodoComponent.tsx";
import {getTodoLists} from "../../sevices/api.service.ts";

export const TodoComponents = () => {
    const [todoLists, setTodoLists] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodoLists()
            .then(response => {
                setTodoLists(response);
            });

        return () => {
            console.log('done');
        }
    }, []);
    return (
        <div>
            {
                todoLists.map(todoList => <TodoComponent key={todoList.id} item={todoList}/>)
            }
        </div>
    );
};