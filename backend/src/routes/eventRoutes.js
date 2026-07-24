import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import authMiddleware
from "../middleware/authMiddleware.js";
import {
  createEvent,
  getEvents,
  getEventById,
  deleteEvent,
  generateQrForEvent,
  uploadTemplate,
  uploadCSV,
  generateEventCertificates,
  getParticipants
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/",authMiddleware,createEvent);
router.get("/", authMiddleware,getEvents);
router.get("/:id", authMiddleware, getEventById);
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

router.post(
  "/:id/generate-certificates",
  authMiddleware,
  generateEventCertificates
);
router.get(
  "/:id/participants",
  authMiddleware,
  getParticipants
);
export default router;