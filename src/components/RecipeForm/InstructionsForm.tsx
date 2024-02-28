import { useFieldArray } from "react-hook-form";
import type { TFormProps, TRecipeForm } from "./FormTypes/FormPropType";
import FieldArrayButtons from "./FieldArrayButtons";
import InstructionField from "./Fields/InstructionField";

const InstructionsForm = ({ control }: TFormProps) => {
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
          return <InstructionField key={field.id} index={index} />;
        })}
      </div>
    </>
  );
};

export default InstructionsForm;
