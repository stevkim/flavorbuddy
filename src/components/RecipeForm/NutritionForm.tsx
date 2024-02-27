import type { TFormProps } from "./FormPropType";
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
              <li key={type}>
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
                <ErrorMessage
                  name={`nutrition.${type.toLowerCase()}`}
                  errors={errors}
                />
              </li>
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

export default NutritionForm;
