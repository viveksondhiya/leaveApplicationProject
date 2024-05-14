import UserModel from "./userModel";

export default async function handler(req, res) {
 // console.log("inside getRole route");
  try {
    const { email } = req.body;
    const user = await UserModel.getUserByEmail(email);
     
    if (user) {
      return res.status(200).json({user});
      }
     else {
      console.log("User not found ");
      res.status(401).json({ message: "not found user email" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
}
}


