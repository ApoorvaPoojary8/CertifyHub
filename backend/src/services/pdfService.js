import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const generateCertificatePDF = async (
  participantName,
  eventName,
  certificateId
) => {
  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage([800, 600]);

  const font = await pdfDoc.embedFont(
    StandardFonts.HelveticaBold
  );

  page.drawText("CERTIFICATE OF PARTICIPATION", {
    x: 180,
    y: 500,
    size: 24,
    font,
    color: rgb(0, 0, 0)
  });

  page.drawText(
    `This certificate is awarded to`,
    {
      x: 250,
      y: 420,
      size: 14
    }
  );

  page.drawText(participantName, {
    x: 280,
    y: 380,
    size: 22,
    font
  });

  page.drawText(
    `For successfully participating in ${eventName}`,
    {
      x: 180,
      y: 330,
      size: 14
    }
  );

  page.drawText(
    `Certificate ID: ${certificateId}`,
    {
      x: 50,
      y: 100,
      size: 12
    }
  );

  return await pdfDoc.save();
};