import RecipePageHeader from "../components/RecipePage/RecipePageHeader";
import PrepTime from "../components/RecipePage/PrepTime";
import IngredientsList from "../components/RecipePage/IngredientsList";
import RecipeInstructions from "../components/RecipePage/RecipeInstructions";
import RecipeNutrition from "../components/RecipePage/RecipeNutrition";
import RecipeImage from "../components/RecipePage/RecipeImage";

const RecipePage = () => {
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
