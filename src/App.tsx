import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "./hooks/storeHooks";
import { setRecipes } from "./features/recipeSlice";
import { getAllRecipes } from "./lib/fetchFunctions";
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useAppDispatch();
  useQuery({
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
      <Toaster />
    </main>
  );
}

export default App;
