"use client";
import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter hook

export default function RegisterPage() {
  const router = useRouter(); // Initialize useRouter hook
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

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
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // User registered successfully
        console.log("User registered successfully");
        // Redirect to login page
        router.push("/login/page"); // Redirect to the login page
        // Show alert for successful registration
        alert(
          "You have been successfully registered. Please login to continue."
        );
      } else {
        // Handle registration error
        const data = await response.json();
        console.error("Registration error:", data.message);
        // You can display an error message to the user
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Handle registration failure
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text">
        <div className="login">
          <h1>Register</h1>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username"> Username </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email ">Email </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
            <h5 className="accountLogin">
             Already have a account? <a href="/login/page">Login here</a>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}
