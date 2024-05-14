import pool from "../../../config/db";

const UserModel = {
  async getUserById(userId) {
    try {
      const [rows] = await pool.query("SELECT * FROM user WHERE uid = ?", [
        userId,
      ]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },
  async getAllUsers() {
    try {
      const [rows] = await pool.query("SELECT * FROM user");
      return rows;
    } catch (error) {
      throw error;
    }
  },
  async createUser(username, email, password, phone) {
    try {
      await pool.query(
        "INSERT INTO user (username, email, password, phone) VALUES (?, ?, ?, ?)",
        [username, email, password, phone]
      );
    } catch (error) {
      throw error;
    }
  },

  async updateUserById(userId, username, email, phone, totalLeave) {
    try {
      await pool.query(
        "UPDATE user SET username = ?, email = ?, phone = ?, totalLeave = ? WHERE uid = ?",
        [username, email, phone, totalLeave, userId]
      );
    } catch (error) {
      throw error;
    }
  },

  async deleteUserById(userId) {
    try {
      await pool.query("DELETE FROM user WHERE uid = ?", [userId]);
    } catch (error) {
      throw error;
    }
  },
  async authenticateUser(email, password) {
    try {
      const [rows] = await pool.query(
        "SELECT * FROM user WHERE email = ? AND password = ?",
        [email, password]
      );

      console.log(rows[0]);
      return rows[0]; // If a user is found, return the user object
    } catch (error) {
      throw error;
    }
  },
  async getUserByEmail(email) {
    //console.log("getemail")
    try {
      const [rows] = await pool.query("SELECT * FROM user WHERE email = ?", [
        email,
      ]);
      // console.log("rows data", rows[0])
      return rows[0];
    } catch (error) {
      throw error;
    }
  },
  // Inside your UserModel file
  async getAdminList(role) {
    try {
      const [rows] = await pool.query("SELECT * FROM user WHERE role = ?", [
        role,
      ]);
      return rows;
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

export default UserModel;
