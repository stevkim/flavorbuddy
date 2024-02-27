import { useFieldArray } from "react-hook-form";
import type { TFormProps, TRecipeForm } from "./FormPropType";
import { ErrorMessage } from "@hookform/error-message";

const IngredientsForm = ({ control, register, errors }: TFormProps) => {
  const { fields, append, remove } = useFieldArray<TRecipeForm>({
    control,
    name: "ingredients",
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <h4>Ingredients</h4>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => append({ ingredient: "" })}
            className="button-secondary"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => remove(fields.length - 1)}
            className="button-secondary ml-auto"
          >
            -
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="w-full">
              <label className="flex">
                &#8226;
                <input
                  type="text"
                  {...register(`ingredients.${index}.ingredient` as const, {
                    required: true,
                  })}
                  className="border-underline ml-2 w-full border-b-2"
                />
              </label>
              <ErrorMessage
                name={`ingredients.${index}.ingredient`}
                errors={errors}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IngredientsForm;
