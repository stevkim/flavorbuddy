import { Router } from "express";
import { getAllRecipes, addRecipe } from "../controllers/RecipeController.js";

const recipeRouter = Router();

recipeRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const results = await getAllRecipes();
      if (results) {
        res.status(200).json(results);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const result = await addRecipe(req.body);
      if (result) {
        res.sendStatus(201);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

export default recipeRouter;
