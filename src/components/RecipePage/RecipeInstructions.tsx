const RecipeInstructions = () => {
  return (
    <div>
      <h4 className="text-content">Instructions</h4>
      <ol className="mt-4">
        <li>
          <span className="ml-2 font-semibold">Beat the eggs:</span> In a bowl,
          beat the eggs with a pinch of salt and pepper until they are well
          minxed. You can add a tablespoon of water or milk for a fluffier
          texture.
        </li>
        <li className="mt-2">
          <span className="ml-2 font-semibold">Heat the pan:</span> Place a
          non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className="mt-2">
          <span className="ml-2 font-semibold">Cook the omelette:</span> Once
          the butter is melted and bubbling, pour in the eggs. Tilt the pan to
          ensure the eggs evenly coat the surface.
        </li>
        <li className="mt-2">
          <span className="ml-2 font-semibold">Add fillings (optional):</span>{" "}
          When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li className="mt-2">
          <span className="ml-2 font-semibold">Fold and serve:</span> As the
          omelette continues to cook, carefully lift one edge and fodl it over
          the fillings. Let it cook for another minute, then slide it onto a
          plate.
        </li>
        <li className="mt-2">
          <span className="ml-2 font-semibold">Enjoy:</span> Serve hot, with
          additional salt and pepper if needed.
        </li>
      </ol>
    </div>
  );
};

export default RecipeInstructions;
