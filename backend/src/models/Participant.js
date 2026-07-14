import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },
  name: String,
  email: String
});

export default mongoose.model(
  "Participant",
  participantSchema
);