import { ErrorMessage } from "@hookform/error-message";
import type { TFormProps } from "../FormTypes/FormPropType";

interface IngredientsFieldProps extends TFormProps {
  index: number;
}

const IngredientsField = ({
  index,
  register,
  errors,
}: IngredientsFieldProps) => {
  return (
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
};

export default IngredientsField;
