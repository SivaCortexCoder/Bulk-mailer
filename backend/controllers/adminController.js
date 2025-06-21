import senderCredentials from "../models/senderModel.js";
import bcrypt from 'bcrypt'

export const addDetail = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);


    const updated = await senderCredentials.findOneAndUpdate(
      {}, 
      { email, hashedPassword },
      { new: true, upsert: true } 
    );

    res.status(200).json({ message: "Credentials saved successfully", data: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
