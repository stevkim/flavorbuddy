import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface IngredientsFieldProps {
  index: number;
}

const IngredientsField = ({ index }: IngredientsFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
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
