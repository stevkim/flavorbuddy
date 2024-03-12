interface RecipeInstructionsProps {
  instructions: string[];
}

const RecipeInstructions = ({ instructions }: RecipeInstructionsProps ) => {
  return (
    <div>
      <h4 className="text-content">Instructions</h4>
      <ol className="mt-4">
        {
          instructions.map((step) => {
            return <li key={step}>{step}</li>
          })
        }
      </ol>
    </div>
  );
};

export default RecipeInstructions;
