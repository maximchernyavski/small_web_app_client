import React from 'react'
import './App.css';
import LogIn from './pages/login/login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
