import express from "express";
import cors from "cors";

import eventRoutes from "./routes/eventRoutes.js";
import participantRoutes from "./routes/participantRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

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
app.use("/api/participants", participantRoutes);
app.use("/api/certificates", certificateRoutes);
app.use(
  "/certificates",
  express.static(
    "generated-certificates"
  )
);

export default app;