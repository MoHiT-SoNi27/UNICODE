import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import CodeData from './components/CodeData';
import Compete from './components/Compete';
import Jobs from './components/Jobs';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/codedata" element={<CodeData />} />
        <Route path="/compete" element={<Compete />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
