import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  participantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participant"
  },

  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },

  certificateId: String,
  pdfUrl: String,
  qrUrl: String,

  status: {
    type: String,
    default: "VERIFIED"
  }

}, {
  timestamps: true
});

export default mongoose.model(
  "Certificate",
  certificateSchema
);