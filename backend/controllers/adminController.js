import senderCredentials from "../models/senderModel.js";

export const addDetail = async (req, res) => {
  try {
    const { email, password } = req.body;

    const updated = await senderCredentials.findOneAndUpdate(
      {}, 
      { email, password },
      { new: true, upsert: true } 
    );

    res.status(200).json({ message: "Credentials saved successfully", data: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
