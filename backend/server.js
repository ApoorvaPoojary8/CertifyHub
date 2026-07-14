import dns from "dns";

// Use Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();

connectDB();