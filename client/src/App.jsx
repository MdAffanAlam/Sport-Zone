import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import Teams from './Teams';
import Register from './Register';
import Login from './Login';
import User from './User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
