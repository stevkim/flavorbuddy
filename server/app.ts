import express from "express";
import RecipeRoutes from "./routes/RecipeRoutes";

const app = express();
app.use(express.json());

app.use("/recipes", RecipeRoutes);

app.listen(3000, () => {
  console.log("Listening on PORT 3000");
});
