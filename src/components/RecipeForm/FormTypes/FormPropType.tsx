import { Control } from "react-hook-form";

export type TRecipeForm = {
  name: string;
  description: string;
  image: string | null;
  prepTime: {
    [type: string]: number;
    total: number;
  };
  ingredients: { ingredient: string }[];
  instructions: { instruction: string }[];
  nutrition: {
    [type: string]: number;
    calories: number;
  };
};

export type TFormProps = {
  control: Control<TRecipeForm>;
};
