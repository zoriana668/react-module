import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";

export const SingleUserDetailComponent = () => {

    const  {state} = useLocation();
    const user = state as IUser;

    return (
        <div>
            {user.firstName}
        </div>
    )
}