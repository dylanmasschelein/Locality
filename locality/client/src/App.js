import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/customerLoginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/protectedPage";

function App() {
  const user = null
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Home />} path="/" />
            {/* <Route element={<ProtectedPage />} path="/protected" /> */}

          </Routes>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;