import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function EmailDescription() {
  const router = useRouter();
  const [emailDescription, setEmailDescription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch email description when the component mounts
    fetchEmailDescription();
  }, []);
  useEffect(() => {
    console.log("emailDescription", emailDescription);
  }, [emailDescription]);
  

  const fetchEmailDescription = async () => {
  //   const { query } = router;
  //  const email = query?.sender;
  //  const date = query?.emailDate;
  // console.log("query parameters " ,router.query)
      const email = 'viveks@indiratrade.com';
      const date = '2024-05-14 16:03:35';
    console.log("email and date ",email, date)

    if (!email || !date) {
      console.error("Email or date not provided");
      return;
    }

    try {
      // Make an API call to fetch email description based on the date and email
      const response = await fetch("/api/email/emailDescription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, date }),
      });

      const data = await response.json();
      console.log("page description",data);
      // setEmailDescription(data);
      setEmailDescription({
        from: data.sender,
        to: data.recipient,
        subject: data.subject,
        days_of_leave: data.days_of_leave,
        message: data.message,
        date: data.email_date // Ensure only the date part is used
      });
     // console.log("emaildescription ", emailDescription)
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching email description:", error);
      setLoading(false); // Set loading to false in case of error
    }
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
      <div className="emailDescription">
        <div className="emailDHeading">
          <div className="headingWithDate">
            <h1>Email Description</h1>
            <div className="dateContainer">
              <span className="dateHeading">Date:</span>
              <span className="dateField">{emailDescription && emailDescription.date}</span>
            </div>
          </div>
          <div className="emailD_tableData">
            <table>
              <tbody>
                <tr>
                  <th>From:</th>
                  <td>{emailDescription && emailDescription.from}</td>
                </tr>
                <tr>
                  <th>To:</th>
                  <td>{emailDescription && emailDescription.to}</td>
                </tr>
                <tr>
                  <th>Subject:</th>
                  <td>{emailDescription && emailDescription.subject}</td>
                </tr>
                <tr>
                  <th>Days of Leave:</th>
                  <td>{emailDescription && emailDescription.days_of_leave}</td>
                </tr>
                <tr>
                  <th>Message:</th>
                  <td>{emailDescription && emailDescription.message}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  
}
