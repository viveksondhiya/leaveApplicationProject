 
import jwt from 'jsonwebtoken';
require('dotenv').config();
const secret_key = 'authenticate';

// Function to generate JWT token
export const generateToken = (user) => {

   // console.log("generate");
    return  jwt.sign({ userId: user.id, email: user.email },
         secret_key.toString('utf-8'),
         { expiresIn: '1h' }); 
     
};

// Function to verify JWT token
export const verifyToken = (token) => {
  //console.log("inside verify", token);
    try {
        const decoded = jwt.verify(token, secret_key);
      //  console.log("decoded", decoded);
        return decoded;
    } catch (error) {
        console.log("error verifyToken", error);
        return null;
    }
};
