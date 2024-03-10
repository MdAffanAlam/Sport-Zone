import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const dummyEvents = [
  { id: 1, location: 'New York', eventName: 'Basketball Championship', date: '2024-07-15', time: '18:00' },
  { id: 2, location: 'Los Angeles', eventName: 'Soccer Tournament', date: '2024-08-02', time: '15:30' },
  { id: 3, location: 'Chicago', eventName: 'Baseball League Finals', date: '2024-09-10', time: '19:45' },
  { id: 4, location: 'Miami', eventName: 'Golf Open', date: '2024-10-05', time: '08:00' },
  { id: 5, location: 'London', eventName: 'Tennis Grand Slam', date: '2024-11-20', time: '12:00' },
  { id: 6, location: 'Tokyo', eventName: 'Olympic Games', date: '2025-01-15', time: '09:30' }
];

function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredEvents = dummyEvents.filter((event) =>
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyTicket = (event) => {
    alert(`Buying ticket for Event: ${event.eventName}\nLocation: ${event.location}\nDate: ${event.date}\nTime: ${event.time}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <Link
          to="/"
          className="inline-block text-indigo-600 py-2 px-4 transition-transform transform hover:scale-105"
        >
          &#8592; Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-center mb-8">Events</h1>
        <input
          type="text"
          placeholder="Search Events by Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-md mb-4 hover:border-indigo-500"
        />
        <table className="w-full">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td className="py-2">{event.eventName}</td>
                <td className="py-2">{event.location}</td>
                <td className="py-2">{event.date}</td>
                <td className="py-2">{event.time}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleBuyTicket(event)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Buy Ticket
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

export default Events;
