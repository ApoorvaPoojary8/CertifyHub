import express from "express";
import {
  createCertificate,
  getCertificates,
  verifyCertificate
} from "../controllers/certificateController.js";

const router = express.Router();

router.post("/", createCertificate);
router.get("/", getCertificates);
router.get("/verify/:certificateId", verifyCertificate);

export default router;