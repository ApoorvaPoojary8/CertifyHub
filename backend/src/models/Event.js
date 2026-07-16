import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
{
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