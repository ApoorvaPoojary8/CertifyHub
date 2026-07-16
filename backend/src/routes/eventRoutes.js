import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  createEvent,
  getEvents,
  deleteEvent,
  generateQrForEvent,
  uploadTemplate
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.delete("/:id", deleteEvent);
router.post(
  "/:id/generate-qr",
  generateQrForEvent
);
router.post(
  "/:id/upload-template",
  upload.single("template"),
  uploadTemplate
);

export default router;