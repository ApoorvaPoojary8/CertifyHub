import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
{
  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organizer"
  },

  name: String,
  description: String,
  date: Date,
  organizer: String,

  googleFormLink: String,
  registrationQr: String,
  templateUrl: String,

},
{
  timestamps: true
}
);

export default mongoose.model(
  "Event",
  eventSchema
);