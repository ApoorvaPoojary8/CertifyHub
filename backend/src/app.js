import express from "express";
import cors from "cors";

import eventRoutes from "./routes/eventRoutes.js";
import participantRoutes from "./routes/participantRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import dashboardRoutes from "./routes/dashboardRoutes.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);



// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CertifyHub API Running"
  });
});

// Routes
app.use("/api/events", eventRoutes);
const __dirname = path.dirname(__filename);
app.use("/api/dashboard", dashboardRoutes);

app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

app.use("/api/participants", participantRoutes);
app.use("/api/certificates", certificateRoutes);
app.use(
  "/certificates",
  express.static(
    "generated-certificates"
  )
);

export default app;