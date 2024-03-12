interface IngredientsProps {
  ingredients: string[];
}

const IngredientsList = ({ ingredients }: IngredientsProps) => {
  return (
    <div>
      <h4 className="text-content">Ingredients</h4>
      <ul className="mt-4">
        {
          ingredients.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  );
};

export default IngredientsList;
