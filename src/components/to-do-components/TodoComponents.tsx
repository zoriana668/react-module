
import {useState, useEffect} from "react";
import {ITodoList, ITodoListResponse} from "../../models/ITodoList.ts";
import {TodoComponent} from "../to-do-component/TodoComponent.tsx";
import {getTodoLists} from "../../services/api.service.ts";

export const TodoComponents = () => {
    const [todoLists, setTodoLists] = useState<ITodoList[]>([]);
    useEffect(() => {
        getTodoLists()
            .then(response => {
                if(response.todos) {
                    setTodoLists(response.todos);
                } else {
                    console.error('Invalid response format', response);
                }
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
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