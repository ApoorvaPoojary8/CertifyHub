import fs from "fs";
import path from "path";

import {
  generateCertificatePDF
} from "./pdfService.js";

export const generateCertificates =
async (
  participants,
  eventName
) => {

  const generatedFiles = [];

  for (const participant of participants) {

    const certificateId =
      "CERT-" +
      Date.now() +
      Math.floor(Math.random() * 1000);

    const pdfBytes =
      await generateCertificatePDF(
        participant.Name,
        eventName,
        certificateId
      );

    const fileName =
      `${participant.Name}.pdf`;

    const filePath =
      path.join(
        "uploads",
        "certificates",
        fileName
      );

    fs.writeFileSync(
      filePath,
      pdfBytes
    );

    generatedFiles.push({
      name: participant.Name,
      email: participant.Email,
      certificateId,
      filePath
    });

  }

  return generatedFiles;
};