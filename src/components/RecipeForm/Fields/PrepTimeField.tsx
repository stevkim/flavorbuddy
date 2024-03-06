import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface PrepTimeFieldProps {
  type: string;
}

const PrepTimeField = ({ type }: PrepTimeFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <li>
      <label>
        <span className="font-semibold">{type}:</span>
        <input
          type="number"
          {...register(`prepTime.${type.toLowerCase()}`, {
            required: `${type} time is required`,
            setValueAs: Number,
          })}
          className="border-underline ml-2 w-[3rem] border-b-2 text-right"
          step={5}
          min={0}
        />
        minutes
      </label>
      <ErrorMessage name={`prepTime.${type.toLowerCase()}`} errors={errors} />
    </li>
  );
};

export default PrepTimeField;
