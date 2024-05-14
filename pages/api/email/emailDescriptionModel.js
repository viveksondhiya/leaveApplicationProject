import pool from "../../../config/db";

const emailDescriptionModel = {
  async getEmailList(email) {
   console.log("getemail emailDescription list", email);
    try {
      const [rows] = await pool.query(
        "SELECT * FROM emailDescription WHERE sender = ?",
        [email]
      );
      //console.log("getemail list db ",rows);
      return rows; // Return the rows fetched from the database
    } catch (error) {
      throw error;
    }
  },

  async getEmailDescription(email, date) {
    console.log("getemail description from db");
    try {
      const [rows] = await pool.query(
        "SELECT * FROM emaildescription WHERE sender = ? AND email_date = ?",
        [email, date]
      );
      console.log("db data", rows);
      return rows; // Return the rows fetched from the database
    } catch (error) {
      throw error;
    }
  },
  async postEmailData(sender, recipient, subject, days_of_leave,message,email_date,status) {
    console.log("inside email data update")
    try {
      const row=await pool.query(
        "INSERT INTO emaildescription (sender, recipient, subject, days_of_leave, message, email_date, status ) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [sender, recipient, subject, days_of_leave,message,email_date,status]
      );
      console.log("connected db",row)
    } catch (error) {
      throw error;
    }
  },
  
};

export default emailDescriptionModel;
