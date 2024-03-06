import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const BasicInfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <h4>Recipe Information</h4>
      <label className="flex w-full text-nowrap">
        {"Recipe Name:"}
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
          })}
          className="border-underline ml-2 w-full border-b-2"
        />
      </label>
      <ErrorMessage name="name" errors={errors} />
      <label className="w-full">
        Description:
        <input
          type="text"
          {...register("description", {
            required: "Please provide a description of the recipe",
            minLength: 20,
          })}
          className="border-underline w-full border-b-2"
        />
      </label>
      <ErrorMessage name="description" errors={errors} />
    </div>
  );
};

export default BasicInfoForm;
