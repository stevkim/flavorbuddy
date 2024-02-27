import { Control, UseFormRegister, FieldValues } from "react-hook-form";

export type TRecipeForm = FieldValues & {
  name: string;
  description: string;
  prepTime: {
    total: number;
    prep: number;
    cook: number;
  };
  ingredients: { ingredient: string }[];
  instructions: { instruction: string }[];
};

export type TFormProps = {
  control?: Control<TRecipeForm>;
  register: UseFormRegister<TRecipeForm>;
};
