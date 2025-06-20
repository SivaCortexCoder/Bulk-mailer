import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createTransporter } from "../config/emailTransporter.js";

dotenv.config();


export const sendingMail = async (req, res) => {
  const { emailList, subject, text } = req.body;
  
  try {
    const {transporter,senderEmail} = await createTransporter()

    let successCount = 0;
    let failureCount = 0;

    if (!subject || !text) {
      return res.status(400).json({ message: "Enter Both Subject and Message" });
    }

    for (const email of emailList) {
      try {
        await transporter.sendMail({
          from: senderEmail,
          to: email,
          subject: subject,
          text: text,
        });
        successCount++;
      } catch (error) {
        failureCount++;
      }
    }

   
    const message = successCount > 0 
      ? `${successCount} emails sent successfully` 
      : "Failed to send emails";

    res.status(200).json({
      message: message,
      successCount,
      failureCount,
    });
    
  } catch (error) {
     res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};
