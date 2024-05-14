import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function EmailData() {
  const router = useRouter();
  const[dummyEmailList,setDummtEmailLIst]=useState([]);
  const [emailList, setEmailList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch email list when the component mounts
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (email) {
      fetchEmailList(email);
    }
  },   [email]); 

  const fetchEmailList = async () => {
  //  const email = "user1@example.com";
   // const email = "test@gmail.com";
   //console.log("use state email", email)
    try {
      const response = await fetch("/api/email/emailList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });
      const data = await response.json();

      console.log("email data list ", data);
      const processedData = data.map(email => ({
        ...email,
        email_date: email.email_date.split('T')[0] // Extract only the date part
      }));
      console.log("email procesed data list ", processedData);
  
      setEmailList(processedData);
 
       setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching email list:", error);
       setLoading(false); // Set loading to false in case of error
    }
  };
  function handleViewClick(emailDate, sender) {
    console.log("handle email data click",emailDate ,sender);
    router.push({
      pathname: "/email/emailDescription",
      query: { date: emailDate, email: email },
    });
  }
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
      <div style={{ margin: "20px" }}>
        <table style={{ width: "100%", backgroundColor: "white" }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #dddddd",
                  padding: "8px",
                  textAlign: "left",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Subject
              </th>
              <th
                style={{
                  border: "1px solid #dddddd",
                  padding: "8px",
                  textAlign: "left",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Date
              </th>
              <th
                style={{
                  border: "1px solid #dddddd",
                  padding: "8px",
                  textAlign: "left",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Status
              </th>
              <th
                style={{
                  border: "1px solid #dddddd",
                  padding: "8px",
                  textAlign: "left",
                  backgroundColor: "#f2f2f2",
                }}
              >
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {emailList.map((email) => (
              <tr key={email.uid}>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  {email.subject}
                </td>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  {email.email_date}
                </td>
                <td style={{ border: "1px solid #dddddd", padding: "8px" }}>
                  {email.status}
                </td>
                <td style={{ border: "2px solid #dddddd", padding: "8px" }}>
                <button onClick={() => handleViewClick(email.email_date, email.sender)}>
                    {" "}
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
