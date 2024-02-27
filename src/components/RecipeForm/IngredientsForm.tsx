import { useFieldArray } from "react-hook-form";
import type { TFormProps, TRecipeForm } from "./FormTypes/FormPropType";
import { ErrorMessage } from "@hookform/error-message";
import FieldArrayButtons from "./FieldArrayButtons";

const IngredientsForm = ({ control, register, errors }: TFormProps) => {
  const { fields, append, remove } = useFieldArray<TRecipeForm>({
    control,
    name: "ingredients",
  });

  const addField = () => append({ ingredient: "" });
  const removeField = () => remove(fields.length - 1);

  return (
    <>
      <div className="flex items-center justify-between">
        <h4>Ingredients</h4>
        <FieldArrayButtons add={addField} remove={removeField} />
      </div>
      <div className="flex w-full flex-col gap-2">
        {fields.map((field, index) => {
          return (
            <IngredientsField
              key={field.id}
              index={index}
              register={register}
              errors={errors}
            />
          );
        })}
      </div>
    </>
  );
};

interface IngredientsFieldProps extends TFormProps {
  index: number;
}

const IngredientsField = ({
  index,
  register,
  errors,
}: IngredientsFieldProps) => (
  <div className="w-full">
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
    <ErrorMessage name={`ingredients.${index}.ingredient`} errors={errors} />
  </div>
);

export default IngredientsForm;
