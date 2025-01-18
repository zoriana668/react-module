
import {useState, useEffect} from "react";
import {ITodoList} from "../../models/ITodoList.ts";
import {TodoComponent} from "../to-do-component/TodoComponent.tsx";
import {getTodoLists} from "../../services/api.service.ts";

export const TodoComponents = () => {
    const [todoLists, setTodoLists] = useState<ITodoList[]>([]);
    useEffect(() => {
        getTodoLists()
            .then(response => {
                setTodoLists(response)
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
    )
}