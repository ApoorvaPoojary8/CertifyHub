import express from "express";
import {
  createParticipant,
  getParticipants
} from "../controllers/participantController.js";

const router = express.Router();

router.post("/", createParticipant);
router.get("/", getParticipants);

export default router;