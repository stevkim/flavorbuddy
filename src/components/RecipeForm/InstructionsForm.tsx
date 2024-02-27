import { useFieldArray } from "react-hook-form";
import type { TFormProps, TRecipeForm } from "./FormTypes/FormPropType";
import { ErrorMessage } from "@hookform/error-message";
import FieldArrayButtons from "./FieldArrayButtons";

const InstructionsForm = ({ control, register, errors }: TFormProps) => {
  const { fields, append, remove } = useFieldArray<TRecipeForm>({
    control,
    name: "instructions",
  });

  const addField = () => append({ instruction: "" });
  const removeField = () => remove(fields.length - 1);

  return (
    <>
      <div className="flex items-center justify-between">
        <h4>Instructions</h4>
        <FieldArrayButtons add={addField} remove={removeField} />
      </div>
      <div className="flex w-full flex-col gap-2">
        {fields.map((field, index) => {
          return (
            <InstructionField
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

interface InstructionFieldProps extends TFormProps {
  index: number;
}

const InstructionField = ({
  index,
  register,
  errors,
}: InstructionFieldProps) => (
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
    <ErrorMessage name={`instructions.${index}.instruction`} errors={errors} />
  </div>
);

export default InstructionsForm;
