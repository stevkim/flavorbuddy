import { Router, Request, Response } from "express";
import validateRecipe from "../middleware/recipePostValidation";
import { getAllRecipes, addRecipe, getRecipeByName } from "../controllers/RecipeController";

const recipeRouter = Router();

recipeRouter
  .route("/")
  .get(async (req: Request, res: Response) => {
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
  .post(validateRecipe, async (req: Request, res: Response) => {
    try {
      const result = await addRecipe(req.body);
      if (result) {
        console.log("success");
        res.sendStatus(201);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

recipeRouter
  .route('/:recipeName')
  .get(async (req: Request, res:Response) => {
    try {
      const result = await getRecipeByName(req.params.recipeName);
      if (result) {
        res.status(200).json(result);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500)
    }
  })

export default recipeRouter;
