// Inside your handler function in login.js or wherever appropriate
import emailDescriptionModel from "./emailDescriptionModel";

export default async function handler(req, res) {
    // console.log("inside emaildata route")
    try {
        const{response}=req.body;
 
        if(response===OK){
            const emailDataback = await emailDescriptionModel.postEmailData(response);
            // console.log("emaildata ok",emailDataback)
        }else{
            console.log("email data is not upadated ");
            return res.status(404).json({ message: "email data is not upadated"});
        }
      
        //return res.status(200).json(emailDataback);
      }  catch (error) {
    console.log("email data is not upadated: error",error);
    return res.status(500).json({ message: error.message });
  }
}
