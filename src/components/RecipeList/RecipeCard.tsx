import { Link } from "@tanstack/react-router";
import type { TFormattedRecipe } from "../../types/RecipeTypes";

interface RecipeCardProps {
  recipe: TFormattedRecipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { image, name, description, prepTime } = recipe;

  return (
    <>
      <div className="flex h-[20rem] w-[30rem] flex-col border-2 p-2">
        <div className="flex h-[90%] flex-col">
          <img
            src={image!}
            className="mx-auto h-[60%] w-full object-cover object-center"
          />
          <h4 className="font-semibold">{name}</h4>
          <p>{description}</p>
          <Link
            to={`/recipes/$recipeName`}
            className="mt-auto"
            params={{ recipeName: recipe.name }}
          >
            {"Read more >>"}
          </Link>
        </div>
        <div className="text-gray flex h-[10%] w-full flex-row items-center text-gray-600">
          <span className="ml-auto mr-1">
            Cook Time: {prepTime.total} minutes
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
