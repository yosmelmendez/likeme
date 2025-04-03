import express from "express";
import cors from "cors";
import postRoutes from "./routes/post.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/posts", postRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
