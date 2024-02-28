import { useFormContext } from "react-hook-form";

interface RecipeImagePreviewProps {
  clearField: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RecipeImagePreview = ({ clearField }: RecipeImagePreviewProps) => {
  const { watch } = useFormContext();
  const file: string = watch("image");

  return (
    <>
      {file ? (
        <div className="flex h-full flex-col">
          <img
            src={file}
            alt="User uploaded picture"
            className="max-h-[90%] w-auto"
          />
          <em className="text-content-accent text-lg">
            Click on the image to change it
          </em>
          <button
            className="absolute right-[10px] top-0"
            onClick={(e) => clearField(e)}
          >
            x
          </button>
        </div>
      ) : (
        <div>
          <p className="text-content-accent text-lg">
            Drop an image here, or click to select
          </p>
          <em>Images must be in .jpeg or .png format</em>
        </div>
      )}
    </>
  );
};

export default RecipeImagePreview;
