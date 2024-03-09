import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto">
      <nav className="py-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/events" className="hover:underline">Events</Link>
          </li>
          <li>
            <Link to="/teams" className="hover:underline">Teams</Link>
          </li>
          <li>
            <Link to="/register" className="hover:underline">Register</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="bg-gray-200 p-8 rounded mt-4">
        {/* Your home content goes here */}
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-gray-700">Your home page content...</p>
      </div>
    </div>
  );
}

export default Home;
