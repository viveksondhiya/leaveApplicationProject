import emailDescriptionModel from "./emailDescriptionModel";

export default async function handler(req, res) {

    try {
        const email=req.body;
         console.log("email/emaillist ",   email)
        // Fetch all users with the role "admin"
        const emailList = await emailDescriptionModel.getEmailList (email);
        // console.log("email-list" ,emailList)
        if (emailList.length > 0) {
          return res.status(200).json(emailList);
        } else {
          console.log("no email data found.");
          return res.status(404).json({ message: "no email data found." });
        }
      }  catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}
