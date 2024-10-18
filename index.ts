import express from "express";
import connectMongoDB from "./config/db";
import authRoutes from "./routes/authRoutes";

const app = express();
const port = process.env.PORT || 8000;

//Connect mongoDB
connectMongoDB();

//Set view engine and view patials
app.set("view engine", "ejs");

//Home PAge
app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

//Routes
app.use("/", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}...`);
});
