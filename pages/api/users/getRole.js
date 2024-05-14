import UserModel from "./userModel";

export default async function handler(req, res) {
 // console.log("inside getRole route");
  try {
    const { email } = req.body;
    const user = await UserModel.getUserByEmail(email);
     
    if (user) {
      //const role=user.role;
    //  console.log("user role ",role)
      // return res.status(200).json({role});
      
    //  console.log("user role ",role)
      return res.status(200).json({user});
      }
     else {
      console.log("Role by email does not found user ");
      res.status(401).json({ message: "not found user email" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
}
}


