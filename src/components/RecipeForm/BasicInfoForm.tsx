import type { TFormProps } from "./FormPropType";

const BasicInfoForm = ({ register }: TFormProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h4>Recipe Information</h4>
      <label className="flex w-full">
        Name:
        <input
          type="text"
          {...(register("name"),
          {
            required: true,
          })}
          className="border-underline ml-2 w-full border-b-2"
        />
      </label>
      <label className="w-full">
        Description:
        <input
          type="text"
          {...(register("description"),
          {
            required: true,
          })}
          className="border-underline w-full border-b-2"
        />
      </label>
    </div>
  );
};

export default BasicInfoForm;
