import InstructionsForm from "../components/RecipeForm/InstructionsForm";
import BasicInfoForm from "../components/RecipeForm/BasicInfoForm";
import PrepTimeForm from "../components/RecipeForm/PrepTimeForm";
import IngredientsForm from "../components/RecipeForm/IngredientsForm";
import NutritionForm from "../components/RecipeForm/NutritionForm";
import { useForm, SubmitHandler } from "react-hook-form";
import type { TRecipeForm } from "../components/RecipeForm/FormPropType";
import { calculatekcal } from "../lib/calculatekcal";
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
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TRecipeForm>({
    defaultValues,
  });
  const { prep, cook, total } = watch("prepTime");
  const { carbs, protein, fat, calories } = watch("nutrition");

  useEffect(() => {
    setValue("prepTime.total", +prep + +cook);
  }, [prep, setValue, cook, total]);

  useEffect(() => {
    setValue("nutrition.calories", calculatekcal(carbs, protein, fat));
  }, [carbs, protein, fat, setValue]);

  const onSubmit: SubmitHandler<TRecipeForm> = (data) => {
    console.log(data);
  };

  return (
    <form className="page" onSubmit={handleSubmit(onSubmit)}>
      Add Recipe Page
      <BasicInfoForm control={control} register={register} errors={errors} />
      <PrepTimeForm
        control={control}
        register={register}
        total={total}
        errors={errors}
      />
      <IngredientsForm control={control} register={register} errors={errors} />
      <InstructionsForm control={control} register={register} errors={errors} />
      <NutritionForm
        kcal={calories}
        control={control}
        register={register}
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRecipePage;
