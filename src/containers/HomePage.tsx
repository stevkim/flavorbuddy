import RecipeList from "../components/RecipeList/RecipeList";
import { useAppSelector } from "../hooks/storeHooks";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  const recipeList = useAppSelector((state) => state.recipes.recipes);

  return (
		<section>
			<Carousel>
				<RecipeList list={recipeList} />
			</Carousel>
		</section>
	);
};

export default HomePage;
