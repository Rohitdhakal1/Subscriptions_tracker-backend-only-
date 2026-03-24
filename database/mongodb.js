import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";
import dns from "dns";

if (!DB_URI) {
  throw new Error(
    "mongodb url is missing or get error inside .env.development/production.local",
  );
}

const connectToDatabase = async () => {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database succesfully in ${NODE_ENV} MODE`);
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
