import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IRecipe} from "../models/recipe/IRecipe";

interface RecipesState {
    recipes: IRecipe[];
}

const initialState: RecipesState = {
    recipes: [],
};

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        setRecipes(state, action: PayloadAction<IRecipe[]>) {
            state.recipes = action.payload;
        },
    },
});

export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
