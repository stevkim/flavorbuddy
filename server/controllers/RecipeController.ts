import prisma from "../db";

export const createRecipe = async (data) => {
  const newRecipe = await prisma.recipe.create({ data });
};

export const getAllRecipes = async () => {
  const recipes = await prisma.recipe.findMany();

  return recipes;
};
