
interface RecipeHeaderProps {
  description: string;
  name: string;
}

const RecipePageHeader = ({ name, description }: RecipeHeaderProps) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
};

export default RecipePageHeader;
