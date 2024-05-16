// Inside your handler function in login.js or wherever appropriate
import emailDescriptionModel from "./emailDescriptionModel";

export default async function handler(req, res) {
    const dateObject = new Date(req.body.date);
    // Formatting the date into the desired format
    const formattedDate = `${dateObject.getFullYear()}-${String(
      dateObject.getMonth() + 1
    ).padStart(2, "0")}-${String(dateObject.getDate()).padStart(
      2,
      "0"
    )} ${String(dateObject.getHours()).padStart(2, "0")}:${String(
      dateObject.getMinutes()
    ).padStart(2, "0")}:${String(dateObject.getSeconds()).padStart(2, "0")}`;

 
     console.log("email and date route ", req.body.email, formattedDate);
    try {
         const email=req.body.email;
         const date=formattedDate;
        // Fetch all users with the role "admin"
        const emailDescription = await emailDescriptionModel.getEmailDescription (email,date);
      console.log("email-description handler" ,emailDescription)
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
