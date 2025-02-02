import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

export const Home = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <div className="home-block">
            <h1>Привіт!</h1>
            {!isAuthenticated ? (
                <p>Щоб побачити контент, <Link to="/auth">увійдіть</Link> у свій акаунт.</p>
            ) : (
                <p>Перегляньте <Link to="/users">користувачів</Link> або <Link to="/recipes">рецепти</Link>.</p>
            )}
        </div>
    );
};
