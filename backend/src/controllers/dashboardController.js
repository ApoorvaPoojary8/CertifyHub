import Event from "../models/Event.js";
import Participant from "../models/Participant.js";

export const getDashboardStats = async (req, res) => {
  try {

    const events = await Event.find({
      organizerId: req.organizer.id,
    });

    const eventIds = events.map((event) => event._id);

    const totalParticipants = await Participant.countDocuments({
      eventId: { $in: eventIds },
    });

    res.status(200).json({
      totalEvents: events.length,
      totalCertificates: 0,
      emailsSent: 0,
      totalParticipants,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard stats",
    });

  }
};