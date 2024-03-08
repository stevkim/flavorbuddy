import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TFormattedRecipe } from "../types/RecipeTypes";

interface RecipesState {
  recipes: TFormattedRecipe[];
}

const initialState: RecipesState = {
  recipes: [],
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<TFormattedRecipe[]>) => {
      state.recipes = action.payload;
    },
  },
});

export const { setRecipes } = recipeSlice.actions;
export const recipeList = (state: RootState) => state.recipes.recipes;
export default recipeSlice.reducer;
