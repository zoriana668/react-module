import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/user";
import { IRecipe } from "../types/recipe";

export const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState<IUser | null>(null);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data));

        fetch(`https://dummyjson.com/recipes/user/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipes(data.recipes));
    }, [id]);

    if (!user) return <p>Завантаження...</p>;

    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Телефон: {user.phone}</p>
            <p>Вік: {user.age}</p>
            <p>Місто: {user.address.city}</p>
            <img src={user.image} alt={user.firstName} width="100" />

            <h3>Рецепти користувача:</h3>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
