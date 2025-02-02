export const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    return response.json();
};
