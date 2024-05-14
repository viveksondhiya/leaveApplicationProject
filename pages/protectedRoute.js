// Import the verifyToken function from auth.js
import { verifyToken } from "../lib/auth"; 

// Example protected route handler
export default async function protectedRouteHandler(req, res) {
  try {
    // Verify token from request headers
    const token = req.headers.authorization.split(" ")[1];
    const decoded = verifyToken(token);

    // If token is valid, continue processing the request
    // Otherwise, return a 401 Unauthorized response
    if (decoded) {
      // Your protected route logic here
      res.status(200).json({ message: "Protected route accessed successfully" });
    } else {
      res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
