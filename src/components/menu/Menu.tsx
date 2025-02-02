import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

const Menu = () => {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    return (
        <nav>
            <Link to="/">Головна</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/users">Користувачі</Link>
                    <Link to="/recipes">Рецепти</Link>
                    <img src={user?.image} alt="User" />
                </>
            ) : (
                <Link to="/auth">Увійти</Link>
            )}
        </nav>
    );
};

export default Menu;
