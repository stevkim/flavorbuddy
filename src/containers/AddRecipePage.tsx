import InstructionsForm from "../components/RecipeForm/InstructionsForm";
import BasicInfoForm from "../components/RecipeForm/BasicInfoForm";
import PrepTimeForm from "../components/RecipeForm/PrepTimeForm";
import IngredientsForm from "../components/RecipeForm/IngredientsForm";
import NutritionForm from "../components/RecipeForm/NutritionForm";
import RecipeImageForm from "../components/RecipeForm/RecipeImageForm";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import type { TRecipeForm } from "../components/RecipeForm/FormTypes/FormPropType";
import { calculatekcal } from "../lib/calculatekcal";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { addRecipe, uploadImage } from "../lib/fetchFunctions";
import { formatRecipe } from "../lib/formatRecipe";
import { formDefaultValues } from "../lib/defaultValues";

const AddRecipePage = () => {
  const methods = useForm<TRecipeForm>({ defaultValues: formDefaultValues });
  const { handleSubmit, watch, setValue, reset, control } = methods;

  // watching updates to automatically update and pass for display
  const { preparation, cooking, total } = watch("prepTime");
  const { carbs, protein, fat, calories } = watch("nutrition");

  // auto updates total prep time
  useEffect(() => {
    setValue("prepTime.total", +preparation + +cooking);
  }, [preparation, setValue, cooking, total]);

  // auto updates calories
  useEffect(() => {
    setValue("nutrition.calories", calculatekcal(carbs, protein, fat));
  }, [carbs, protein, fat, setValue]);

  const mutation = useMutation({
    mutationFn: addRecipe,
    onSuccess: (res) => {
      console.log(res);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TRecipeForm> = async (data) => {
    const imagePath = await uploadImage(data.image as File);
    mutation.mutate(formatRecipe(data, imagePath));
  };

  return (
    <FormProvider {...methods}>
      <form className="page" onSubmit={handleSubmit(onSubmit)}>
        Add Recipe Page
        <BasicInfoForm />
        <RecipeImageForm />
        <PrepTimeForm total={total} />
        <IngredientsForm control={control} />
        <InstructionsForm control={control} />
        <NutritionForm kcal={calories} />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default AddRecipePage;
