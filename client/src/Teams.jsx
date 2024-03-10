import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if using React Router

const realTeams = [
  { id: 1, name: "Los Angeles Lakers", sportsType: "Basketball" },
  { id: 2, name: "Golden State Warriors", sportsType: "Cricket" },
  { id: 3, name: "Boston Celtics", sportsType: "Basketball" },
  { id: 4, name: "Miami Heat", sportsType: "Vollyball" },
  { id: 5, name: "Chicago Bulls", sportsType: "Cricket" },
  { id: 6, name: "Toronto Raptors", sportsType: "Basketball" },
  { id: 7, name: "Houston Rockets", sportsType: "Cricket" },
  { id: 8, name: "Dallas Mavericks", sportsType: "Basketball" },
  { id: 9, name: "Philadelphia 76ers", sportsType: "Vollyball" },
  { id: 10, name: "Denver Nuggets", sportsType: "Vollyball" },
];

function Teams() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTeams = realTeams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleJoinTeam = (teamId, teamName) => {
    alert(`Joining Team ${teamName} (ID: ${teamId})`);
  };

  const handleCreateTeam = () => {
    alert("Successfully Created Team"); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl mb-8">
        <Link
          to="/"
          className="inline-block text-indigo-600 py-2 px-4 transition-transform transform hover:scale-105"
        >
          &#8592; Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-center mb-8">Teams</h1>

        <button
          onClick={handleCreateTeam}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mb-4"
        >
          Create Own Team
        </button>

        <input
          type="text"
          placeholder="Find Teams"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 p-2 border border-gray-300 rounded-md w-full hover:border-indigo-500"
        />

        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Sports Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeams.map((team) => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.sportsType}</td>
                <td>
                  <button
                    onClick={() => handleJoinTeam(team.id, team.name)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Join Team
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

export default Teams;
