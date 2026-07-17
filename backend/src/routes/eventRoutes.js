import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import authMiddleware
from "../middleware/authMiddleware.js";
import {
  createEvent,
  getEvents,
  deleteEvent,
  generateQrForEvent,
  uploadTemplate,
  uploadCSV
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/", authMiddleware,authMiddleware,createEvent);
router.get("/", authMiddleware,getEvents);
router.delete("/:id", authMiddleware,deleteEvent);
router.post(
  "/:id/generate-qr",
  authMiddleware,
  generateQrForEvent
);
router.post(
  "/:id/upload-template",
  upload.single("template"),
  uploadTemplate
);

router.post(
  "/:id/upload-csv",
  authMiddleware,
  upload.single("csv"),
  uploadCSV
);

export default router;