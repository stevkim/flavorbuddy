import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface NutritionFieldProps {
  type: string;
}

const NutritionTypeField = ({ type }: NutritionFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
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
};

export default NutritionTypeField;
