import UserModel from "./userModel";

export default async function handler(req, res) {
 // console.log("inside getRole route");
  try {
    const { email,date ,status} = req.body;
    const user = await UserModel.getUserByEmail(email);
     
    if (user) {
       const userId=user.uid;
       await UserModel.updateStatus(userId,status)
      return res.status(200).json({message:"user status is updated "});
      }
     else {
      console.log("Status is not Updated ");
      res.status(401).json({ message: "Error while updating status" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
}
}


