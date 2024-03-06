export type TRecipe = {
  name: string;
  description: string;
  image: string | null;
  prepTime: {
    [type: string]: number;
    total: number;
  };
  nutrition: {
    [type: string]: number;
    calories: number;
  };
};

export type TFormattedRecipe = TRecipe & {
  ingredients: string[];
  instructions: string[];
};
