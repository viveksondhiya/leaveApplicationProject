// // lib/auth.js

// import jwt from 'jsonwebtoken';
// require('dotenv').config();

//  let secret_key= 'authenticate';

// // Function to generate JWT token
// export const generateToken = (user) => {
//     return jwt.sign(
//         { userId: user.id, email: user.email},
//         'authenticate', // Replace with your actual secret key
//         { expiresIn: '1h' } // Token expiration time
//     );
// };

// // Function to verify JWT token
// export const verifyToken = (token) => {
//     console.log("inside verify" ,token)
//     try {
//         const decoded = jwt.verify(token,  'authenticate'); 

//         return decoded;
//     } catch (error) {
//         console.log("error verifyToken",error)
//         return null; 
//     }
// };

// lib/auth.js

import jwt from 'jsonwebtoken';

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
   // console.log("inside verify", token);
    try {
        const decoded = jwt.verify(token, secret_key);
        //console.log("decoded", decoded);
        return decoded;
    } catch (error) {
        console.log("error verifyToken", error);
        return null;
    }
};
