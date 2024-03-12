import prisma from "../db";
import type { Recipe } from "../middleware/recipePostValidation";

export const addRecipe = async (data: Recipe) => {
  const newRecipe = await prisma.recipe.create({
    data: {
      name: data.name,
      description: data.description,
      image: data.image,
      prepTime: data.prepTime,
      ingredients: data.ingredients,
      instructions: data.instructions,
      nutrition: data.nutrition,
    },
  });
  return newRecipe;
};

export const getAllRecipes = async () => {
  const recipes = await prisma.recipe.findMany({});
  return recipes;
};

export const getRecipeByName = async (name:string) => {
  const recipe = await prisma.recipe.findUnique({ where: {
    name
  } });
  return recipe;
}
