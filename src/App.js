import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/" className="text-blue-500 mx-2">Login</Link>
        <Link to="/signup" className="text-green-500 mx-2">Sign Up</Link>
      </div>
    </Router>
  );
}

export default App;
