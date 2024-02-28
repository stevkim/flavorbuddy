import { useFieldArray } from "react-hook-form";
import type { TFormProps, TRecipeForm } from "./FormTypes/FormPropType";
import FieldArrayButtons from "./FieldArrayButtons";
import IngredientsField from "./Fields/IngredientsField";

const IngredientsForm = ({ control }: TFormProps) => {
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
          return <IngredientsField key={field.id} index={index} />;
        })}
      </div>
    </>
  );
};

export default IngredientsForm;
