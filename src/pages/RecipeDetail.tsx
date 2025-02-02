import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {IRecipe} from "../models/recipe/IRecipe";

export const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<IRecipe | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data));
    }, [id]);

    if (!recipe) return <p>Завантаження...</p>;

    return (
        <div className="recipes-detail__container">
            <h2 className="recipe-author">{recipe.name}</h2>
            <p>Інгредієнти: {recipe.ingredients.join(", ")}</p>
            <p>Опис: {recipe.instructions}</p>

            <div className="recipe-detail__tags">
                <h3>Теги:</h3>
                {recipe.tags.map((tag) => (
                <span key={tag} style={{ marginRight: 8 }}>#{tag}</span>
                ))}
            </div>

            <p className="recipe-author__profile">
                Автор: <Link to={`/users/${recipe.userId}`}>Дивитися профіль</Link>
            </p>
        </div>
    );
};
