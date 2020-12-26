import express from "express";
import Routes from "./routes";

// rest of the code remains same
const app = express();
const PORT = 8000;

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

//Routes
app.use(Routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
