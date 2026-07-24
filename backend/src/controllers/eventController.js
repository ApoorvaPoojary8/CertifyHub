import Event from "../models/Event.js";
import { generateEventQR } from "../services/qrService.js";
import { readExcelFile } from "../services/csvService.js";
import { generateCertificates } from "../services/certificateService.js";

import Participant from "../models/Participant.js";


export const createEvent = async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      organizerId: req.organizerId,
    });

    // Generate QR using Google Form Link
 const qrData = await generateEventQR(
  event.registrationLink,
  event._id
);
    // Save QR path
    event.registrationQr = qrData.qrPath;

    await event.save();

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get All Events

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({
      organizerId: req.organizerId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete Event

export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Event deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Regenerate QR

export const generateQrForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

const qrData = await generateEventQR(
    event.registrationLink,
    event._id
);

    event.registrationQr = qrData.qrPath;

    await event.save();

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =======================
// Upload Certificate Template
// =======================
export const uploadTemplate = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    event.templateUrl = req.file.path;

    await event.save();

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =======================
// Upload CSV
// =======================
export const uploadCSV = async (req, res) => {
  try {
    const data = readExcelFile(req.file.path);

    // Store temporarily
    req.app.locals.csvData = data;

    res.status(200).json({
      success: true,
      rows: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =======================
// Generate Certificates
// =======================
export const generateEventCertificates = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    const participants = req.app.locals.csvData || [];

    const files = await generateCertificates(
      participants,
      event.name
    );

    res.status(200).json({
      success: true,
      total: files.length,
      files,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const getParticipants = async (req, res) => {
  try {
    const participants = await Participant.find({
      eventId: req.params.id,
    });

    res.status(200).json(participants);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch participants",
    });
  }
};