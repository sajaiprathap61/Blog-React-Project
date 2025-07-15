import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";

const app = express();

// Enable CORS for all origins (development-safe)
app.use(cors());

// If you want to allow only specific origins
// app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const port = 8000;
app.listen(port, () => {
  console.log("connected:" + port);
});
