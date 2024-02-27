import { ErrorMessage } from "@hookform/error-message";
import type { TFormProps } from "../FormTypes/FormPropType";

interface InstructionFieldProps extends TFormProps {
  index: number;
}

const InstructionField = ({
  index,
  register,
  errors,
}: InstructionFieldProps) => {
  return (
    <div className="w-full">
      <label className="flex">
        {`${index + 1}.`}
        <input
          type="text"
          {...register(`instructions.${index}.instruction` as const, {
            required: true,
          })}
          className="border-underline ml-2 w-full border-b-2"
        />
      </label>
      <ErrorMessage
        name={`instructions.${index}.instruction`}
        errors={errors}
      />
    </div>
  );
};

export default InstructionField;
