import { useFieldArray } from "react-hook-form";
import type { TFormProps, TRecipeForm } from "./FormPropType";

const InstructionsForm = ({ control, register }: TFormProps) => {
  const { fields, append, remove } = useFieldArray<TRecipeForm>({
    control,
    name: "instructions",
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <h4>Instructions</h4>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => append({ instruction: "" })}
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
            <label key={field.id} className="flex w-full">
              {`${index + 1}.`}
              <input
                type="text"
                {...(register(`instructions.${index}.instruction` as const),
                {
                  required: true,
                })}
                className="border-underline ml-2 w-full border-b-2"
              />
            </label>
          );
        })}
      </div>
    </>
  );
};

export default InstructionsForm;
