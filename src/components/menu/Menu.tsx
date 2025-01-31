import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'auth'}>AuthPage</Link></li>
            </ul>
        </div>
    );
};