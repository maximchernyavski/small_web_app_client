import React from 'react'
import './App.css';
// import LogIn from './pages/login/login.jsx';
// import Blog from './pages/blog/blog.jsx';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom'
import AuthProvider from './components/router/auth_provider.jsx';
import Routes from './components/router/router.jsx';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<LogIn />} />
    //     <Route exact path="/blog" element={<Blog />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
