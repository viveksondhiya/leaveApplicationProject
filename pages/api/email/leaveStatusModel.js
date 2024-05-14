import pool from "../../../config/db";

const leaveStatusModel = {
  async getEmailList(email) {
    console.log("getemail list")
    try {
        const [rows] = await pool.query("SELECT * FROM leaveStatus WHERE email = ?", [email]);
        return rows; // Return the rows fetched from the database
    } catch (error) {
        throw error;
    }
},

  async getAdminList(role) {
    try {
      const [rows] = await pool.query("SELECT * FROM user WHERE role = ?", [
        role,
      ]);
    } catch (error) {
      throw error;
    }
  },
 
  async updateStatus(userId, status) {
    try {
      await pool.query(
        "UPDATE user SET status = ?  WHERE uid = ?",
        [status, userId]
      );
    } catch (error) {
      throw error;
    }
  },
};

export default leaveStatusModel;
