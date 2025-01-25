import {IUser} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import {UserComponent} from "../user/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((response) => {
            setUsers(response.users);
        }).catch(err => {
            console.error('Error fetching users', err);
        });
    }, []);

    return (
        <div>
            {users.length > 0 ? (
                users.map(user => <UserComponent key={user.id} item={user} />)
            ) : (
                <p>Loading users...</p>
            )}
        </div>
    );
};