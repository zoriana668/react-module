import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserTypeProps = {
    item: IUser;
}

export const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {
                item.username
            }
        </div>
    );
};
