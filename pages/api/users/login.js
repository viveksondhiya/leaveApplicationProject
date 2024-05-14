// login.js (login route)
import crypto from "crypto";
import { generateToken } from "../../../lib/auth";
import UserModel from "./userModel";

export default async function handler(req, res) {
  console.log("inside login route");
  try {
    const { email, password } = req.body;
    const user = await UserModel.getUserByEmail(email);
     
    if (user) {
      // Hash the provided password using SHA-256 for comparison
      const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
      
      if (hashedPassword === user.password) {
        // Passwords match, generate token
        const token = generateToken(user); 
        res.status(200).json({ user, token });
      } else {
        // Passwords don't match
        console.log("hashed error");
        return res.status(401).json({ message: "Invalid email or hashpassword" });
      }
    } else {
      console.log("login error");
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
