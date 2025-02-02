import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../api/authApi";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await loginUser(username, password);
            if (response.token) {
                dispatch(loginSuccess({ user: response, token: response.token }));
                navigate("/users"); // Перенаправлення після входу
            } else {
                alert("Невірні дані!");
            }
        } catch (error) {
            console.error("Помилка входу", error);
        }
    };

    return (
        <div>
            <h2>Вхід</h2>
            <input
                type="text"
                placeholder="Логін"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Увійти</button>
        </div>
    );
};

export default Auth;
