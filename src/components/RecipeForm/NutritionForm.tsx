import type { TFormProps } from "./FormTypes/FormPropType";
import { ErrorMessage } from "@hookform/error-message";

interface NutritionProps extends TFormProps {
  kcal: number;
}

const nutritionTypes = ["Carbs", "Protein", "Fat"];

const NutritionForm = ({ register, kcal, errors }: NutritionProps) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <h4>Nutrition</h4>
        <ul className="mx-auto mt-4 flex w-[90%] flex-col">
          {nutritionTypes.map((type) => {
            return (
              <NutritionTypeField
                key={type}
                register={register}
                type={type}
                errors={errors}
              />
            );
          })}
        </ul>
        <div className="ml-auto">
          <span className="mr-2 font-semibold">Total:</span>
          {kcal} kcal
        </div>
      </div>
    </>
  );
};

interface NutritionFieldProps extends TFormProps {
  type: string;
}

const NutritionTypeField = ({
  register,
  type,
  errors,
}: NutritionFieldProps) => (
  <li>
    <label>
      <span className="font-semibold">{type}</span>
      <input
        type="number"
        {...register(`nutrition.${type.toLowerCase()}`, {
          required: `${type} is required`,
        })}
        className="border-underline ml-2 w-[3rem] border-b-2 text-right"
        min={0}
      />
      grams
    </label>
    <ErrorMessage name={`nutrition.${type.toLowerCase()}`} errors={errors} />
  </li>
);

export default NutritionForm;
