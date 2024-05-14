// // index.js
// import bcrypt from "bcrypt";
// import UserModel from "./userModel";

// export default async function handler(req, res) {
//   switch (req.method) {
//     case "POST":
//       return await createUser(req, res);
//     default:
//       return res.status(400).send("Method not allowed");
//   }
// }

// async function createUser(req, res) {
//   try {
//     const { username, email, password, phone } = req.body;
 
//    // const hashedPassword = await bcrypt.hash(password, 10);  
 
//     const user=await UserModel.createUser(username, email, password, phone);
//     console.log("hashed" ,user)
//     return res.status(201).send("User created successfully");
//   } catch (error) {
//     console.log("invalid index",error)
//     return res.status(500).json({ message: error.message });
//   }
// }

// index.js (register route)
import crypto from "crypto";
import UserModel from "./userModel";

export default async function handler(req, res) {
  try {
    const { username, email, password, phone } = req.body;

    // Hash the password using SHA-256
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    console.log("register hashedPassword" ,hashedPassword)
    const user = await UserModel.createUser(username, email, hashedPassword, phone);
    console.log("hashed", user);
    return res.status(201).send("User created successfully");
  } catch (error) {
    console.log("invalid index", error);
    return res.status(500).json({ message: error.message });
  }
}
