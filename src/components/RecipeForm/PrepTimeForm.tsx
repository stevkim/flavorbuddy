import type { TFormProps } from "./FormTypes/FormPropType";
import { ErrorMessage } from "@hookform/error-message";

interface PrepProps extends TFormProps {
  total: number;
}

const prepTypes = ["Preparation", "Cooking"];

const PrepTimeForm = ({ register, total, errors }: PrepProps) => {
  return (
    <div className="flex w-full flex-col">
      <h4>Preparation Time</h4>
      <ul className="mx-auto mt-4 w-[90%]">
        {prepTypes.map((type) => {
          return (
            <PrepTimeField
              key={type}
              register={register}
              errors={errors}
              type={type}
            />
          );
        })}
      </ul>
      <div className="ml-auto">
        <span className="font-semibold">Total time:</span> {total} minutes
      </div>
    </div>
  );
};

interface PrepTimeFieldProps extends TFormProps {
  type: string;
}

const PrepTimeField = ({ type, register, errors }: PrepTimeFieldProps) => (
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

export default PrepTimeForm;
