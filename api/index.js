import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import uploadRoutes from "./routes/upload.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true, // ✅ this is required for cookies to work
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/upload", uploadRoutes);

const port = 8000;
app.listen(port, () => {
  console.log("connected:" + port);
});
