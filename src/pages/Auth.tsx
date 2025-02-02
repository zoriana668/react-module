import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../api/authApi";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import {IUser} from "../models/user/IUser";
import "../index.css";

export const Auth = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<{ username: string; password: string }>({
        username: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Функція валідації
    const validateInput = (name: string, value: string): string => {
        if (!value.trim()) return "Це поле обов'язкове";
        if (value.length < 2) return "Має бути більше 2 символів";
        if (value.length > 20) return "Максимальна довжина - 20 символів";
        return "";
    };

    const handleChange =
        (setter: React.Dispatch<React.SetStateAction<string>>, field: "username" | "password") =>
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setter(e.target.value);
                setErrors((prev) => ({
                    ...prev,
                    [field]: validateInput(field, e.target.value),
                }));
            };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const usernameError = validateInput("username", username);
        const passwordError = validateInput("password", password);
        setErrors({ username: usernameError, password: passwordError });

        if (usernameError || passwordError) return;

        try {
            const response: IUser & { token: string } = await loginUser(username, password);

            dispatch(loginSuccess({ user: response, token: response.token }));
            navigate("/users");
        } catch (error) {
            alert(error.message);
        }
    };



    return (
        <div className="auth-container">
            <form onSubmit={handleLogin}>
                <h2>Вхід</h2>

                <div className="input-group">

                    <input
                        type="text"
                        placeholder="Логін"
                        value={username}
                        onChange={handleChange(setUsername, "username")}
                    />
                    {errors.username && <p className="error-message">{errors.username}</p>}
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={handleChange(setPassword, "password")}
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>

                <button type="submit" disabled={!!errors.username || !!errors.password}>
                    Увійти
                </button>
            </form>
        </div>
    );
};
