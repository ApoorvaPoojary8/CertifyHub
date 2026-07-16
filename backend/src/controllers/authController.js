import Organizer from "../models/Organizer.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
export const register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const existingOrganizer =
      await Organizer.findOne({ email });

    if (existingOrganizer) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const organizer =
      await Organizer.create({
        name,
        email,
        password: hashedPassword
      });

    res.status(201).json({
      success: true,
      data: organizer
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Login
export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const organizer =
      await Organizer.findOne({ email });

    if (!organizer) {
      return res.status(404).json({
        message: "Organizer not found"
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        organizer.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        id: organizer._id
      },
      "certifyhubsecret",
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      success: true,
      token
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};