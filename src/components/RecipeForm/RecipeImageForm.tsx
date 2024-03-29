import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
// import { convertImageFileToBase64 } from "../../lib/convertImageFileToBase64";
import RecipeImagePreview from "./RecipeImagePreview";

const RecipeImageForm = () => {
  const { setValue } = useFormContext();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setValue("image", acceptedFiles[0]);
    },
    [setValue],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg"],
    },
    multiple: false,
    noKeyboard: true,
    maxFiles: 0,
  });

  const clearField = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setValue("image", null);
  };

  return (
    <section className="w-full">
      <h4 className="font-semibold">Image Upload</h4>
      <p className="ml-2">Upload an image of your recipe!</p>
      <div
        {...getRootProps()}
        className="relative mx-auto mt-4 flex h-[22rem] w-[80%] items-center justify-center border-4 p-8 text-center"
      >
        <input {...getInputProps()} />
        <RecipeImagePreview clearField={clearField} />
      </div>
    </section>
  );
};

export default RecipeImageForm;
