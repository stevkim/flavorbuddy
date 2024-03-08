import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "./hooks/storeHooks";
import { setRecipes } from "./features/recipeSlice";
import { getAllRecipes } from "./lib/fetchFunctions";

function App() {
  const dispatch = useAppDispatch();
  const { error } = useQuery({
    queryKey: ["recipes"],
    queryFn: () =>
      getAllRecipes().then((results) => {
        dispatch(setRecipes(results));
        return results;
      }),
  });

  return (
    <main className="bg-secondary min-h-[100vh] w-full">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
