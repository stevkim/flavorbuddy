import { z } from "zod";
import { Request, Response, NextFunction } from "express";

const Recipe = z.object({
  name: z.string(),
  description: z.string().min(20),
  image: z.string(),
  prepTime: z.object({
    total: z.number().multipleOf(5).gt(0),
    preparation: z.number().multipleOf(5),
    cooking: z.number().multipleOf(5),
  }),
  ingredients: z.string().array().nonempty(),
  instructions: z.string().array().nonempty(),
  nutrition: z.object({
    calories: z.number(),
    carbs: z.number(),
    protein: z.number(),
    fat: z.number(),
  }),
});

export type Recipe = z.infer<typeof Recipe>;

const validateRecipe = (req: Request, res: Response, next: NextFunction) => {
  try {
    Recipe.parse(req.body);
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

export default validateRecipe;
