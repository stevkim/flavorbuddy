import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RecipePage from "./containers/RecipePage.tsx";
import AddRecipePage from "./containers/AddRecipePage.tsx";
import HomePage from "./containers/HomePage.tsx";
import "./index.css";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store.ts";
import { Provider } from "react-redux";

const rootRoute = createRootRoute({
  component: App,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export const recipePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/recipes/$recipeName",
  component: RecipePage,
});

const addRecipeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add-recipe",
  component: AddRecipePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  recipePageRoute,
  addRecipeRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
