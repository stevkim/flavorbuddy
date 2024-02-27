import { ErrorMessage } from "@hookform/error-message";
import type { TFormProps } from "../FormTypes/FormPropType";

interface PrepTimeFieldProps extends TFormProps {
  type: string;
}

const PrepTimeField = ({ type, register, errors }: PrepTimeFieldProps) => {
  return (
    <li>
      <label>
        <span className="font-semibold">{type}:</span>
        <input
          type="number"
          {...register(`prepTime.${type.toLowerCase()}`, {
            required: `${type} time is required`,
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
