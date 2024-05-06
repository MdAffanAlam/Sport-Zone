import React, { useState } from "react";

function User() {
  // State to manage which detail is being edited
  const [editDetail, setEditDetail] = useState(null);

  // Function to handle click on a detail for editing
  const handleEdit = (detail) => {
    setEditDetail(detail);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-gray-300 min-h-screen">
      <div className="flex items-center justify-center">
        <div className="container flex flex-wrap">
          <div className="left flex-initial w-32 bg-gradient-to-br from-indigo-400 to-gray-300 p-4">
            <img src="" alt="no image" />
            <h3>Profile Pic</h3>
            <ol className="list-disc p-4">
              <li
                className="font-medium font-bold"
                onClick={() => handleEdit("Personal Information")}
              >
                Personal Information
              </li>
              <li
                className="font-medium font-bold"
                onClick={() => handleEdit("Sports")}
              >
                Sports
              </li>
              <li
                className="font-medium font-bold"
                onClick={() => handleEdit("Yes")}
              >
                Yes
              </li>
            </ol>
          </div>
          <div className="right grow bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-300 ... p-4">
            {editDetail && (
              <form>
                {/* Input fields for editing the selected detail */}
                {editDetail === "Personal Information" && (
                  <>
                    <label className="block font-bold">Name:</label>
                    <div className="mb-4">
                      <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter the full Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <label className="block font-bold" htmlFor="email">
                      Email
                    </label>
                    <div className="mb-4">
                      <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email/username"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <label className="block font-bold" htmlFor="phone">
                      Phone Number
                    </label>
                    <div className="mb-4">
                      <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Save
                    </button>
                  </>
                )}
                {editDetail === "Sports" && (
                  <>
                    <label className="block font-bold mb-2">
                      Favorite Sport:
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                      type="text"
                    />

                    <label className="block font-bold mb-2">
                      Experience Level:
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                      type="text"
                    />

                    <label className="block font-bold mb-2">Favorite Team:</label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                      type="text"
                    />
                    <label className="block font-bold mb-2">Sport Type:</label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                      type="text"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Save
                    </button>
                  </>
                )}

                {editDetail === "Yes" && (
                  <>
                    <label className="block font-bold mb-2">
                      Favorite Sport:
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                      type="text"
                    />

                    <label className="block font-bold mb-2">
                      Experience Level:
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                      type="text"
                    />

                    <label className="block font-bold mb-2">Favorite Team:</label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                      type="text"
                    />
                    <label className="block font-bold mb-2">Sport Type:</label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-indigo-300 hover:border-indigo-500"
                      type="text"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Save
                    </button>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
