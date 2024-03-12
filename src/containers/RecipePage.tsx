import { recipePageRoute } from "../main";
import { useNavigate } from "@tanstack/react-router";
import { Suspense } from "react";
import RecipeWrapper from "../components/RecipePage/RecipeWrapper";

const RecipePage = () => {
  const { recipeName } = recipePageRoute.useParams();
  const navigate = useNavigate();

  if (!recipeName) {
    navigate({ to: "/" });
  }

  return (
		<div className="page">
			<Suspense fallback={<div>Loading...</div>}>
				<RecipeWrapper recipeName={recipeName} />
			</Suspense>
		</div>
	);
};

export default RecipePage;
