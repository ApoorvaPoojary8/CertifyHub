import Participant from "../models/Participant.js";

// Add Participant
export const createParticipant = async (req, res) => {
  try {
    const participant = await Participant.create(req.body);

    res.status(201).json({
      success: true,
      data: participant
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Participants
export const getParticipants = async (req, res) => {
  try {
    const participants = await Participant.find()
      .populate("eventId");

    res.status(200).json({
      success: true,
      data: participants
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};