// Inside your handler function in login.js or wherever appropriate
import emailDescriptionModel from "./emailDescriptionModel";

export default async function handler(req, res) {
    console.log("inside emaildescription route", req.body.email)
    try {
        const{email,date}=req.body;
        // Fetch all users with the role "admin"
        const emailDescription = await emailDescriptionModel.getEmailDescription (email,date);
         console.log("email-description" ,emailDescription)
        if (emailDescription.length > 0) {
          return res.status(200).json(emailDescription);
        } else {
          console.log("email description is not found ");
          return res.status(404).json({ message: "email description is not found for this email and date"});
        }
        //return res.status(200).json(emailDescription);
      }  catch (error) {
    console.log("emailDescription error",error);
    return res.status(500).json({ message: error.message });
  }
}
