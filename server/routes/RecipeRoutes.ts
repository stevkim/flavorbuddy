import { Router, Request, Response } from "express";
import { getAllRecipes } from "../controllers/RecipeController";

const recipeRouter = Router();

recipeRouter.route("/").get(async (req: Request, res: Response) => {
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
});

export default recipeRouter;
