import RecipeList from "../components/RecipeList/RecipeList";
import { useAppSelector } from "../hooks/storeHooks";

const HomePage = () => {
  const recipeList = useAppSelector((state) => state.recipes.recipes);

  return (
    <section>
      <RecipeList list={recipeList} />
    </section>
  );
};

export default HomePage;
