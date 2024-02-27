import type { TFormProps } from "./FormPropType";

const NutritionForm = ({ register }: TFormProps) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <h4>Nutrition</h4>
        <ul className="mx-auto mt-4 flex w-[90%] flex-col">
          <li>
            <label>
              <span className="font-semibold">Carbs</span>
              <input
                type="number"
                {...(register("nutrition.carbs"),
                {
                  required: true,
                })}
                className="border-underline ml-2 w-[3rem] border-b-2 text-right"
                min={0}
              />
              grams
            </label>
          </li>
          <li>
            <label>
              <span className="font-semibold">Protein</span>
              <input
                type="number"
                {...(register("nutrition.protein"),
                {
                  required: true,
                })}
                className="border-underline ml-2 w-[3rem] border-b-2 text-right"
                min={0}
              />
              grams
            </label>
          </li>
          <li>
            <label>
              <span className="font-semibold">Fat</span>
              <input
                type="number"
                {...(register("nutrition.fat"),
                {
                  required: true,
                })}
                className="border-underline ml-2 w-[3rem] border-b-2 text-right"
                min={0}
              />
              grams
            </label>
          </li>
        </ul>
        <div className="ml-auto">
          <span className="font-semibold">Total:</span> kcal
        </div>
      </div>
    </>
  );
};

export default NutritionForm;
