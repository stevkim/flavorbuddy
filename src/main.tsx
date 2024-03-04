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

const rootRoute = createRootRoute({
  component: App,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const recipePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/$recipe",
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
