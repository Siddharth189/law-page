import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";
import blogRoutes from "./routes/blogs.routes.js";
import mailRoutes from "./routes/mail.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;
// Use the cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// auth routes
app.use("/api/auth", authRoutes);

// blog routes
app.use("/", blogRoutes);

// mail routes
app.use("/", mailRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
