// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

     // console.log("response", response);
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const { email } = data.user;
        //  console.log("login data ",data.user)
        localStorage.setItem("token", token);
    //    localStorage.setItem("email", email);

        router.push("/home/page");
      } else {
        // Handle login error
        alert(
          "You have entered invalid email or password"
        );
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text">
        <div className="login">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          {error && (
            <div className="text-red-500 mb-4">{error}</div> // Display error message
          )}
          <br></br>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="border border-gray-400 p-2"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="border border-gray-400 p-2"
              />
            </div>
            <br></br>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>

            <h5 className="accountLogin">
              Don't have an account? <a href="/register/page">Register here</a>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}
