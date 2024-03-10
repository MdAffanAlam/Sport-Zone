import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then((result) => {
        alert("Login Successfully"); 
        if (result.data.message === "Success") { 
          navigate("/");
        } else {
          alert("Login failed. Server response:", result.data.message); 
        }
      })
      .catch((err) => {
        alert("Error:", err);
      });
  };
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <Link
          to="/"
          className="inline-block text-indigo-600 py-2 px-4 rtransition-transform transform hover:scale-105"
        >
          &#8592; Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-4">Login</h1>

        <p>Sign in to continue</p>

        <form onSubmit={handleSubmit}>
          <label className="block font-bold" htmlFor="email">
            Email
          </label>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
              type="email"
              name="email"
              id="email"
              placeholder="Email/username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label className="block font-bold" htmlFor="password">
            Password
          </label>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white border-2 border-black py-2 px-6 font-bold rounded-md hover:bg-gray-800"
          >
            Submit
          </button>
          <p>
            New User?{" "}
            <Link
              to="/register"
              className="inline-block text-indigo-600 py-2 px-1 rtransition-transform transform hover:scale-105"
            >
              Register in here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
