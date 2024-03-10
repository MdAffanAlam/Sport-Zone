import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.message === "Email already exists") {
          alert("Error: Email already exists. Please use a different email.");
        } else {
          console.error("Error:", error);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <Link
          to="/"
          className="inline-block text-indigo-600 py-2 px-4 transition-transform transform hover:scale-105"
        >
          &#8592; Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-4">New User Registration</h1>

        <form onSubmit={handleSubmit}>
          {/* ... (rest of the form code) */}
          <button
            type="submit"
            className="bg-black text-white border-2 border-black py-2 px-6 font-bold rounded-md hover:bg-gray-800"
          >
            Submit
          </button>

          <p>
            Already Registered?{" "}
            <Link to="/login" className="inline-block text-indigo-600 py-2 px-1 transition-transform transform hover:scale-105">
              Log in here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
