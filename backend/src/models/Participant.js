import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    usn: {
      type: String,
    },

    department: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Participant", participantSchema);