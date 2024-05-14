// pages/api/getAllUsers.js

import UserModel from "./userModel";  

export default async function handler(req, res) {
  try {
    const users = await UserModel.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
