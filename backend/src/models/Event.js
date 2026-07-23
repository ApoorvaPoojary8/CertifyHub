import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    organizerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    time: {
      type: String,
    },

    venue: {
      type: String,
    },

    capacity: {
      type: Number,
    },

    registrationLink: {
      type: String,
      required: true,
    },

    registrationQr: {
      type: String,
      default: "",
    },

    templateUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);