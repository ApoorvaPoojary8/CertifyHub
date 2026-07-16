import QRCode from "qrcode";

export const generateEventQR = async (
  eventId
) => {

  const registrationLink =
  `http://localhost:5173/register/event/${eventId}`;

  const qrPath =
  `generated-certificates/event-${eventId}.png`;

  await QRCode.toFile(
    qrPath,
    registrationLink
  );

  return {
    registrationLink,
    qrPath
  };
};