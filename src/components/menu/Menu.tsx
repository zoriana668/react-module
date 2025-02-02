import { useSelector, useDispatch } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/authSlice"; // Додаємо logout

export const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <nav>
            <Link to="/">Головна</Link>

            {isAuthenticated && user ? (
                <>
                    <Link to="/users">Користувачі</Link>
                    <Link to="/recipes">Рецепти</Link>


                    {user.image && (
                        <img
                            src={user.image}
                            alt="User"
                            className="user-avatar"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                marginLeft: "10px",
                            }}
                        />
                    )}

                    <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
                        Вийти
                    </button>
                </>
            ) : (
                <Link to="/auth">Увійти</Link>
            )}
        </nav>
    );
};
