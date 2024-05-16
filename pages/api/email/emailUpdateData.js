 
import emailDescriptionModel from "./emailDescriptionModel";

export default async function updateEmailData(responseVariable, formEmailData) {
    // console.log("email form data response :" , responseVariable);
    // console.log("email form data :" , formEmailData);
    try {
        if(responseVariable){
          const currentDate = new Date();
          formEmailData.email_date = currentDate;

          const sender=formEmailData.from;
          const recipient=formEmailData.to;
          const subject=formEmailData.subject;
          const days_of_leave=formEmailData.days;
          const message=formEmailData.message;
          const email_date=formEmailData.email_date;
          const status="pending";
          console.log("email_data ok",formEmailData)
          const emailUpdated = await emailDescriptionModel.postEmailData(sender, recipient, subject, days_of_leave,message,email_date,status);
          console.log("emailUpdated ok",emailUpdated)
        }
        // else{
        //     console.log("email data is not upadated ");
        //     return res.status(404).json({ message: "email data is not upadated"});
        // }
      
        //return res.status(200).json(emailDataback);
      }  catch (error) {
    console.log("email data is not upadated: error",error);
  //  return res.status(500).json({ message: error.message });
  }
}
