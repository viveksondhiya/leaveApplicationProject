// Inside your handler function in login.js or wherever appropriate
import emailDescriptionModel from "./emailDescriptionModel";

export default async function handler(req, res) {
    console.log("inside emaildata route")
    try {
        const { response } = req.body;

        if (response === "OK") {
            // Assuming emailId and newStatus are passed in the request body
            const { emailId, newStatus } = req.body;

            // Call a function in your emailDescriptionModel to update the status
            const emailDataUpdated = await emailDescriptionModel.updateEmailStatus(emailId, newStatus,date);

            console.log("Email data updated successfully:", emailDataUpdated);
            return res.status(200).json({ message: "Email data updated successfully", updatedData: emailDataUpdated });
        } else {
            console.log("Email data is not updated");
            return res.status(404).json({ message: "Email data is not updated" });
        }
    } catch (error) {
        console.error("Error updating email data:", error);
        return res.status(500).json({ message: error.message });
    }
}


// approveButton.addEventListener("click", async () => {
//     // Make a fetch request to update the status to approved
//     const response = await fetch(`http://yourwebsite.com/updateStatus?email=${encodeURIComponent(staticEmail)}&date=${encodeURIComponent(dynamicDate)}&status=approved`, {
//         method: 'GET', // or 'POST' if your server accepts POST requests
//     });
    
//     // Handle the response
//     const data = await response.json();
//     console.log(data);

//     // Assuming emailId and newStatus are defined elsewhere
//     const { emailId, newStatus } = data; // Extract emailId and newStatus from the response

//     // Call the updateEmailStatus function with emailId, newStatus, and dynamicDate
//     const emailDataUpdated = await emailDescriptionModel.updateEmailStatus(emailId, newStatus, dynamicDate);
// });

// rejectButton.addEventListener("click", async () => {
//     // Make a fetch request to update the status to rejected
//     const response = await fetch(`http://yourwebsite.com/updateStatus?email=${encodeURIComponent(staticEmail)}&date=${encodeURIComponent(dynamicDate)}&status=rejected`, {
//         method: 'GET', // or 'POST' if your server accepts POST requests
//     });
    
//     // Handle the response
//     const data = await response.json();
//     console.log(data);

//     // Assuming emailId and newStatus are defined elsewhere
//     const { emailId, newStatus } = data; // Extract emailId and newStatus from the response

//     // Call the updateEmailStatus function with emailId, newStatus, and dynamicDate
//     const emailDataUpdated = await emailDescriptionModel.updateEmailStatus(emailId, newStatus, dynamicDate);
// });
