interface RecipeImageProps {
  image: string;
}

const RecipeImage = ({ image }:RecipeImageProps) => {
  return (
    <div className="mx-auto flex max-h-[400px] w-full items-center justify-center overflow-hidden rounded">
      <img
        src={image}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default RecipeImage;
