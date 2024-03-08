import RecipePageHeader from "../components/RecipePage/RecipePageHeader";
import PrepTime from "../components/RecipePage/PrepTime";
import IngredientsList from "../components/RecipePage/IngredientsList";
import RecipeInstructions from "../components/RecipePage/RecipeInstructions";
import RecipeNutrition from "../components/RecipePage/RecipeNutrition";
import RecipeImage from "../components/RecipePage/RecipeImage";
import { recipePageRoute } from "../main";
import { useNavigate } from "@tanstack/react-router";
import { useAppSelector } from "../hooks/storeHooks";
import { useMemo } from "react";

const RecipePage = () => {
  const { recipeName } = recipePageRoute.useParams();
  const recipeList = useAppSelector((state) => state.recipes.recipes);
  const navigate = useNavigate();

  const currentRecipe = useMemo(() => {
    return recipeList.find((item) => item.name === recipeName);
  }, [recipeName, recipeList]);

  if (!currentRecipe) {
    navigate({ to: "/" });
  }

  return (
    <div className="page">
      <RecipeImage />
      <RecipePageHeader />
      <PrepTime />
      <IngredientsList />
      <RecipeInstructions />
      <RecipeNutrition />
    </div>
  );
};

export default RecipePage;
