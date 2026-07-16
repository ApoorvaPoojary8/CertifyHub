import Certificate from "../models/Certificate.js";

// Create Certificate
export const createCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.create(req.body);

    res.status(201).json({
      success: true,
      data: certificate
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Certificates
export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find()
      .populate("participantId")
      .populate("eventId");

    res.status(200).json({
      success: true,
      data: certificates
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verify Certificate
export const verifyCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findOne({
      certificateId: req.params.certificateId
    })
      .populate("participantId")
      .populate("eventId");

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found"
      });
    }

    res.status(200).json({
      success: true,
      data: certificate
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};