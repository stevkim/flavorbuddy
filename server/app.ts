import express from "express";
import RecipeRoutes from "./routes/RecipeRoutes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/recipes", RecipeRoutes);

app.listen(3000, () => {
  console.log("Listening on PORT 3000");
});
