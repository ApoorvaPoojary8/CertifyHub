import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema({

  name: String,

  email: {
    type: String,
    unique: true
  },

  password: String

}, {
  timestamps: true
});

export default mongoose.model(
  "Organizer",
  organizerSchema
);