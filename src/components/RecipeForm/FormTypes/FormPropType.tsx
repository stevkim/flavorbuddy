import { Control } from "react-hook-form";
import { TRecipe } from "../../../types/RecipeTypes";

export type TRecipeForm = TRecipe & {
  image: File | null;
  ingredients: { ingredient: string }[];
  instructions: { instruction: string }[];
};

export type TFormProps = {
  control: Control<TRecipeForm>;
};
