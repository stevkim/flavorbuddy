import type { TFormattedRecipe } from "../types/RecipeTypes";
import type { TRecipeForm } from "../components/RecipeForm/FormTypes/FormPropType";

export const formatRecipe = (
  data: TRecipeForm,
  imageUrl: string,
): TFormattedRecipe => {
  const result: TFormattedRecipe = {
    name: data.name,
    description: data.description,
    image: imageUrl,
    prepTime: data.prepTime,
    nutrition: data.nutrition,
    ingredients: data.ingredients.map(
      (obj: { ingredient: string }) => obj.ingredient,
    ),
    instructions: data.instructions.map(
      (obj: { instruction: string }) => obj.instruction,
    ),
  };

  return result;
};
