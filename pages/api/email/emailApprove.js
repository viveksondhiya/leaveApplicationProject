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
            const emailDataUpdated = await emailDescriptionModel.updateEmailStatus(emailId, newStatus);

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
