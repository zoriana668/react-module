import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import './UserComponent.css';

type UserTypeProps = {
    item: IUser;
}

export const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div className={'user-block'}>
                <p className={'item-firstName'}>{item.firstName}</p>
                <p className={'item-lastName'}>{item.lastName}</p>
                <p className={'item-age'}>{item.age} y.o.</p>
                <p className={'item-userName'}>{item.username}</p>
                <img src={item.image} alt={item.username}/>

        </div>
    )
}