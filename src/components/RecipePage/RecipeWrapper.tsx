import RecipePageHeader from "./RecipePageHeader";
import PrepTime from "./PrepTime";
import IngredientsList from "./IngredientsList";
import RecipeInstructions from "./RecipeInstructions";
import RecipeNutrition from "./RecipeNutrition";
import RecipeImage from "./RecipeImage";
import { getRecipeByName } from "../../lib/fetchFunctions";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

interface RecipeWrapperProps {
  recipeName: string;
}

const RecipeWrapper = ({ recipeName }: RecipeWrapperProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`${recipeName}`],
    queryFn: () => getRecipeByName(recipeName),
    retry: false
  });

  if (isLoading) {
		return <div>Loading...</div>
	}

  if (error && !isLoading) {
    toast.error(`Bad Link: Internal Server Error`);
    return <Navigate to='/' />
  }

  return (
		<>
			<RecipeImage image={data.image} />
			<RecipePageHeader name={data.name} description={data.description} />
			<PrepTime prepTime={data.prepTime} />
			<IngredientsList ingredients={data.ingredients}/>
			<RecipeInstructions instructions={data.instructions} />
			<RecipeNutrition nutrition={data.nutrition} />
		</>
	);
};

export default RecipeWrapper