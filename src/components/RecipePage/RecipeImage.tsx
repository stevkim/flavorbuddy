const RecipeImage = () => {
  return (
    <div className="mx-auto flex max-h-[400px] w-full items-center justify-center overflow-hidden rounded">
      <img
        src={
          "https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=1298&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default RecipeImage;
