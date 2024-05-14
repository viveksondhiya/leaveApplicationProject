// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { verifyToken } from "../../lib/auth";

// export default function HomePage() {

//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     to: "",
//     cc: "",
//     subject: "",
//     message: "",
//   });
//   const [loggedIn, setLoggedIn] = useState(true);
//   const [userRole, setUserRole] = useState(null); // State to store user role
//   const [userData, setUserData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Sending email:", formData);
//     // Implement your logic to send the email here
//     setFormData({
//       to: "",
//       cc: "",
//       subject: "",
//       message: "",
//     });
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const email = localStorage.getItem("email");
//     if (!token) {
//       router.push("/login/page");
//     } else {
//       const decoded = verifyToken(token);
//       if (!decoded) {
//         router.push("/login/page");
//       } else {
//         // Fetch user role based on email
//         fetchUserRole(email);
//       }
//     }
//   }, []);

//   // Function to fetch user role
//   const fetchUserRole = async (email) => {
//     try {
//       const response = await fetch("/api/users/getRole", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();
//       console.log("home data role".data);
//       setUserData(data.user);
//       setUserRole(data.user.role); // Set user role state
//     } catch (error) {
//       console.error("Error fetching user role:", error);
//     }
//   };

//   const handleDashboardClick = () => {
//     router.push("/admin/dashboard");
//   };

//   function handleLogout() {
//     // Clear the token from local storage
//     localStorage.removeItem('token'); // Assuming you stored the token in localStorage

//     setLoggedIn(false);
//     router.push("/login/page"); // Redirect to the login page
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="navbar">
//         <h1>User Dashboard</h1>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//       <div className="containerHome">
//         <div className="profile">
//           <h1>Profile</h1>
//           <div className="tableData">
//           <table>
//         <tbody>
//           <tr>
//             <th>Username :</th>
//             <td>{userData && userData.username}</td>
//           </tr>
//           <tr>
//             <th>Email :</th>
//             <td>{userData && userData.email}</td>
//           </tr>
//           <tr>
//             <th>Phone :</th>
//             <td>{userData && userData.phone}</td>
//           </tr>
//           <tr>
//             <th>Remaining Leave :</th>
//             <td>{userData && userData.totalLeave} out of 20</td>
//           </tr>
//         </tbody>
//       </table>
//           </div>
//           {userRole === "admin" && ( // Render the button only if user role is admin
//             <div className="adminDashboardButton">
//               <h1>Admin Dashboard</h1>
//               <button onClick={handleDashboardClick}>Dashboard</button>
//             </div>
//           )}
//         </div>
//         <div className="emailTemplate">
//           <div className="sendEmail">
//             <h2 className="text-3xl font-bold mb-4">Leave Application</h2>
//             <form className="w-full" onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="to"
//                   className="block text-gray-700 font-bold mb-2"
//                 >
//                   To:
//                 </label>
//                 <br />
//                 <input
//                   type="email"
//                   id="to"
//                   name="to"
//                   onChange={handleChange}
//                   value={formData.to}
//                   className="border border-gray-400 p-2"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="cc"
//                   className="block text-gray-700 font-bold mb-2"
//                 >
//                   CC:
//                 </label>
//                 <br />
//                 <input
//                   type="email"
//                   id="cc"
//                   name="cc"
//                   onChange={handleChange}
//                   value={formData.cc}
//                   className="border border-gray-400 p-2"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="subject"
//                   className="block text-gray-700 font-bold mb-2"
//                 >
//                   Subject:
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   onChange={handleChange}
//                   value={formData.subject}
//                   className="border border-gray-400 p-2"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="message"
//                   className="block text-gray-700 font-bold mb-2"
//                 >
//                   Message:
//                 </label>
//                 <br />
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="border border-gray-400 p-2"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// today
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { verifyToken } from "../../lib/auth";

// export default function HomePage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     to: "",
//     //cc: "",
//     subject: "",
//     message: "",
//   });

//   const [loggedIn, setLoggedIn] = useState(true);
//   const [userRole, setUserRole] = useState(null); // State to store user role
//   const [userData, setUserData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/users/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ formData }),
//       });
//       const data = await response.json();
//       console.log("email response home", data);

//       const { accepted } = data;

//       if (accepted && accepted.length > 0) {
//         alert("Email has Sent Successfully ");
//         console.log("Email delivered successfully to:", accepted);
//       } else {
//         alert("Email has not Sent Successfully ");
//         console.log("Email delivery failed or no recipients were accepted.");
//       }

//       // Reset form data after successful submission
//       setFormData({
//         to: [""],
//         subject: "",
//         message: "",
//       });
//       console.log("home email sent");
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const email = localStorage.getItem("email");
//     if (!token) {
//       router.push("/login/page");
//     } else {
//       const decoded = verifyToken(token);
//       if (!decoded) {
//         router.push("/login/page");
//       } else {
//         // Fetch user role based on email
//         fetchUserRole(email);
//         fetchAdminEmails();
//       }
//     }
//   }, []);

//   // Function to fetch user role
//   const fetchUserRole = async (email) => {
//     try {
//       const response = await fetch("/api/users/getRole", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();
//       console.log("home data role".data);
//       setUserData(data.user);
//       setUserRole(data.user.role); // Set user role state
//     } catch (error) {
//       console.error("Error fetching user role:", error);
//     }
//   };

//   const handleDashboardClick = () => {
//     router.push("/admin/dashboard");
//   };

//   function handleLogout() {
//     // Clear the token from local storage
//     localStorage.removeItem("token"); // Assuming you stored the token in localStorage

//     setLoggedIn(false);
//     router.push("/login/page"); // Redirect to the login page
//   }

//   const fetchAdminEmails = async () => {
//     try {
//       const response = await fetch("/api/users/getAdminList", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(admin),
//       });
//     //   const data = await response.json();
//     //   console.log("test")
//       // Extract emails from adminUsers array
//     const adminEmails = data.adminUsers.map((admin) => admin.email);
//       console.log("admin emails",adminEmails)
//       return response.role;
//     } catch (error) {
//       console.error("Error fetching admin emails:", error);
//       return [];
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="navbar">
//         <h1>User Dashboard</h1>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//       <div className="containerHome">
//         <div className="profile">
//           <h1>Profile</h1>
//           <div className="tableData">
//             <table>
//               <tbody>
//                 <tr>
//                   <th>Username :</th>
//                   <td>{userData && userData.username}</td>
//                 </tr>
//                 <tr>
//                   <th>Email :</th>
//                   <td>{userData && userData.email}</td>
//                 </tr>
//                 <tr>
//                   <th>Phone :</th>
//                   <td>{userData && userData.phone}</td>
//                 </tr>
//                 <tr>
//                   <th>Remaining Leave :</th>
//                   <td>{userData && userData.totalLeave} out of 20</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           {userRole === "admin" && ( // Render the button only if user role is admin
//             <div className="adminDashboardButton">
//               <h1>Admin Dashboard</h1>
//               <button onClick={handleDashboardClick}>Dashboard</button>
//             </div>
//           )}
//         </div>
//         <form className="sendEmailForm" onSubmit={handleSubmit}>
//           <div className="formGroup">
//             <label htmlFor="to" className="formLabel">
//               Recipient Email:
//             </label>
//             <input
//               type="email"
//               id="to"
//               name="to"
//               value={formData.to}
//               onChange={handleChange}
//               className="formInput"
//               placeholder="Recipient Email"
//               required
//             />
//           </div>
//           <div className="formGroup">
//             <label htmlFor="subject" className="formLabel">
//               Subject:
//             </label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="formInput"
//               placeholder="Subject"
//               required
//             />
//           </div>
//           <div className="formGroup">
//             <label htmlFor="message" className="formLabel">
//               Message:
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="formTextarea"
//               placeholder="Message"
//               required
//             />
//           </div>
//           <button type="submit" className="formButton">
//             Send Email
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

//working
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { verifyToken } from "../../lib/auth";

export default function HomePage() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState(null); // State to store user role
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    cc: "",
    subject: "",
    days: "",
    message: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/email/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      const data = await response.json();
      console.log("email response home", data);

      // Reset form data after successful submission
      if (data && data.accepted && data.accepted.length > 0) {
        alert("Email has Sent Successfully ");
        console.log("Email delivered successfully to:", data.accepted);
        setFormData({
          from: userData.email,
          to: "",
          cc: "",
          subject: "",
          days: "",
          message: "",
          username: userData.username,
        });
        console.log("home email sent");
      } else {
        alert("Email has not Sent ");
        console.log("Email delivery failed or no recipients were accepted.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    // Fetch user role based on email
    const token = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    if (!token) {
      router.push("/login/page");
    } else {
      const decoded = verifyToken(token);
      if (!decoded) {
        router.push("/login/page");
      } else {
        fetchUserRole(storedEmail);
      }
    }
  }, []);

  // Function to fetch user role
  const fetchUserRole = async (email) => {
    //console.log("inside fetch userole");
    try {
      const response = await fetch("/api/users/getRole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log("home data role:", data.user);
      setUserData(data.user);
      setEmail(data.user.email);
      setUsername(data.user.username);
      setUserRole(data.user.role);
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  useEffect(() => {
    if (userData) {
      // Set formData after userData is fetched
      setFormData((prevFormData) => ({
        ...prevFormData,
        from: userData.email,
        username: userData.username,
      }));
    }
  }, [userData]);
  const handleEmailInboxClick = () => {
    router.push("/email/emailData");
  };
  const handleDashboardClick = () => {
    router.push("/admin/dashboard");
  };

  function handleLogout() {
    // Clear the token from local storage
    localStorage.removeItem("token");

    setLoggedIn(false);
    router.push("/login/page"); // Redirect to the login page
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="navbar">
        <h1>User Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="containerHome">
        <div className="profile">
          <h1>Profile</h1>
          <div className="tableData">
            <table>
              <tbody>
                <tr>
                  <th>Username :</th>
                  <td>{userData && userData.username}</td>
                </tr>
                <tr>
                  <th>Email :</th>
                  <td>{userData && userData.email}</td>
                </tr>
                <tr>
                  <th>Phone :</th>
                  <td>{userData && userData.phone}</td>
                </tr>
                <tr>
                  <th>Remaining Leave :</th>
                  <td>{userData && userData.totalLeave} out of 20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="userEmailButton">
              <h1>Your Email Inbox :</h1>
              <button onClick={handleEmailInboxClick}>Inbox</button>
            </div>
          {userRole === "admin" && (
            <div className="adminDashboardButton">
              <h1>Admin Dashboard :</h1>
              <button onClick={handleDashboardClick}>Dashboard</button>
            </div>
          )}
        </div>
        <form className="sendEmailForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="to" className="formLabel">
              Recipient Email:
            </label>
            <input
              type="email"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="formInput"
              placeholder="Recipient Email"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="cc" className="formLabel">
              CC:
            </label>
            <input
              type="text"
              id="cc"
              name="cc"
              value={formData.cc}
              onChange={handleChange}
              className="formInput"
              placeholder="CC Email (Separate multiple emails with commas)"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="subject" className="formLabel">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="formInput"
              placeholder="Subject"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="days" className="formLabel">
              How Many Days ?:
            </label>
            <input
              type="number"
              id="days"
              name="days"
              value={formData.days}
              onChange={handleChange}
              className="formInput"
              placeholder="How many days ?"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" className="formLabel">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="formTextarea"
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" className="formButton">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}
