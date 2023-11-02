import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import useAuthCheck from './Hooks/useAuthCheck';
import Home from './pages/Home';
import PrivateRoute from './components/routeGard/PrivateRoute';
import Friend from './pages/Friend';
import Message from './pages/Message';
import PublicRoute from './components/routeGard/PublicRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';

function App() {
  console.log(process.env.REACT_APP_SERVER_URL);
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>Loading.....</div>
  ) : (
    <div className="App flex flex-col justify-between h-[100vh] overflow-hidden">
      <Router>
        <Routes>
          <Route
            index
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/friend"
            element={
              <PrivateRoute>
                <Friend />
              </PrivateRoute>
            }
          />
          <Route
            path="/message"
            element={
              <PrivateRoute>
                <Message />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
        <Route path="*" element={<PageNotFound />} />
      </Router>
    </div>
  );
}

export default App;
