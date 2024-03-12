interface RecipeNutritionProps {
  nutrition: { calories: number, protein: number, fat: number, carbs: number };
}

const RecipeNutrition = ({ nutrition }:RecipeNutritionProps) => {
  return (
    <div>
      <h4 className="text-content">Nutrition</h4>
      <p className="mt-2">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="mx-auto mt-4 grid w-[90%] grid-cols-2">
        <p>Calories</p>
        <p className="text-content">{nutrition.calories}kcal</p>
        <p>Carbs</p>
        <p className="text-content">{nutrition.carbs}g</p>
        <p>Protein</p>
        <p className="text-content">{nutrition.protein}g</p>
        <p>Fat</p>
        <p className="text-content">{nutrition.fat}g</p>
      </div>
    </div>
  );
};

export default RecipeNutrition;
