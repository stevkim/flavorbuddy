import { Control, UseFormRegister, FormStateProxy } from "react-hook-form";

export type TRecipeForm = {
  name: string;
  description: string;
  prepTime: {
    total: number;
    prep: number;
    cook: number;
  };
  ingredients: { ingredient: string }[];
  instructions: { instruction: string }[];
  nutrition: {
    [type: string]: number;
    calories: number;
  };
};

export type TFormProps = {
  control?: Control<TRecipeForm>;
  errors?: FormStateProxy["dirtyFields"];
  register: UseFormRegister<TRecipeForm>;
};
