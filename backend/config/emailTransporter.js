import nodemailer from "nodemailer";
import SenderCredentials from "../models/senderModel.js";

export const createTransporter = async () => {
  try {
    const sender = await SenderCredentials.findOne().sort({ _id: -1 });

    if (!sender) {
      console.log("No sender credentials found in the database");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: sender.email,
        pass: sender.password,
      },
    });

    return { transporter, senderEmail: sender.email };
  } catch (error) {
    console.error("Failed to create transporter:", error);
    throw error;
  }
};
