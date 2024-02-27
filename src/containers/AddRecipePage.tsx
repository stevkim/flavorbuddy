import InstructionsForm from "../components/RecipeForm/InstructionsForm";
import BasicInfoForm from "../components/RecipeForm/BasicInfoForm";
import PrepTimeForm from "../components/RecipeForm/PrepTimeForm";
import IngredientsForm from "../components/RecipeForm/IngredientsForm";
import NutritionForm from "../components/RecipeForm/NutritionForm";
import { useForm, SubmitHandler } from "react-hook-form";
import type { TRecipeForm } from "../components/RecipeForm/FormPropType";
import { useEffect } from "react";

const defaultValues = {
  name: "",
  description: "",
  prepTime: {
    prep: 5,
    cook: 5,
    total: 10,
  },
  ingredients: [{ ingredient: "" }],
  instructions: [{ instruction: "" }],
  nutrition: {
    carbs: 0,
    protein: 0,
    fat: 0,
    calories: 0,
  },
};

const AddRecipePage = () => {
  const { register, handleSubmit, control, watch, setValue } =
    useForm<TRecipeForm>({
      defaultValues,
    });
  const onSubmit: SubmitHandler<TRecipeForm> = (data) => {
    console.log(data);
  };
  const [prep, cook] = watch(["prepTime.prep", "prepTime.cook"]);

  useEffect(() => {
    setValue("prepTime.total", +prep + +cook);
  }, [prep, setValue, cook]);

  return (
    <form className="page" onSubmit={handleSubmit(onSubmit)}>
      Add Recipe Page
      <BasicInfoForm control={control} register={register} />
      <PrepTimeForm
        control={control}
        register={register}
        total={watch("prepTime.total")}
      />
      <IngredientsForm control={control} register={register} />
      <InstructionsForm control={control} register={register} />
      <NutritionForm control={control} register={register} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRecipePage;
