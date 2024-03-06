import type { TFormattedRecipe } from "../types/RecipeTypes";

const url = "http://localhost:3000/recipes";

export const addRecipe = async (data: TFormattedRecipe) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
};

export const getAllRecipes = async () => {
  const response = await fetch(url);

  return response.json();
};

const cloudUrl = "https://api.cloudinary.com/v1_1/dse1m1yxj/image/upload";

export const uploadImage = async (image: File) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "ml_default");

  const response = await fetch(cloudUrl, {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  return result.secure_url;
};