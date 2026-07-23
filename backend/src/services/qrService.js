import QRCode from "qrcode";

export const generateEventQR = async (registrationLink, eventId) => {

    const qrPath = `uploads/qrcodes/event-${eventId}.png`;

    await QRCode.toFile(qrPath, registrationLink);

    return {
        qrPath,
    };
};