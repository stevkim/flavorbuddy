import prisma from "../db.js";

export const addRecipe = async (data) => {
  const newRecipe = await prisma.recipe.create({
    data: {
      name: data.name,
      description: data.description,
      image: data.image,
      prepTime: {
        create: data.prepTime,
      },
      ingredients: data.ingredients,
      instructions: data.instructions,
      nutrition: {
        create: data.nutrition,
      },
    },
  });
  return newRecipe;
};

export const getAllRecipes = async () => {
  const recipes = await prisma.recipe.findMany({
    include: {
      prepTime: true,
      nutrition: true,
    },
  });
  return recipes;
};
