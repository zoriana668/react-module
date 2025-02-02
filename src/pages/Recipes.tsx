import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../api/recipesApi";
import { setRecipes } from "../redux/recipesSlice";
import { RootState } from "../redux/store";
import {IRecipe} from "../models/recipe/IRecipe";
import { Link } from "react-router-dom";
import {Search} from "../components/search/Search";
import {Pagination} from "../components/pagination/Pagination";


export const Recipes = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state: RootState) => state.recipes.recipes);
    const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>(recipes);
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 5;

    useEffect(() => {
        fetchRecipes().then((data) => dispatch(setRecipes(data.recipes)));
    }, [dispatch]);

    useEffect(() => {
        setFilteredRecipes(recipes);
    }, [recipes]);

    const handleSearch = (query: string) => {
        const results = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecipes(results);
    };

    const handleTagClick = (tag: string) => {
        const results = recipes.filter((recipe) => recipe.tags.includes(tag));
        setFilteredRecipes(results);
    };

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    return (
        <div className="recipes-container">
            <h2>Рецепти</h2>
            <Search onSearch={handleSearch} />
            <ul className="recipes-list">
                {currentRecipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        <div>
                            {recipe.tags.map((tag) => (
                                <button className="recipes-tags-btn" key={tag} onClick={() => handleTagClick(tag)}>
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredRecipes.length / recipesPerPage)}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};
