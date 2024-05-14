// Inside your handler function in login.js or wherever appropriate
import UserModel from "./userModel";

export default async function handler(req, res) {

  try {
    const admin=req.body;
    // Fetch all users with the role "admin"
    const adminUsers = await UserModel.getAdminList("admin");

    if (adminUsers.length > 0) {
      return res.status(200).json({ adminUsers });
    } else {
      //console.log("No admin users found.");
      return res.status(404).json({ message: "No admin users found." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}
