import {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../sevices/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser | null>(null)

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            });


        // return () => {
        //     console.log('done');
        // }

    }, []);


    const foo = (item: IUser)=>  {
        setItem(item);
    }

    return (
        <div>
            {
                item && <div>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.username}</p>
        </div>
            }
            {
                users.map(user => <UserComponent foo={foo} key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;