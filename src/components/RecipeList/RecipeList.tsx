import RecipeCard from "./RecipeCard";
import type { TFormattedRecipe } from "../../types/RecipeTypes";
interface RecipeListProps {
  list: TFormattedRecipe[] | undefined;
}

const RecipeList = ({ list }: RecipeListProps) => {

  return (
    <>
      {list?.map((recipe) => <RecipeCard recipe={recipe} key={recipe.name} />)}
    </>
  );
};

export default RecipeList;
