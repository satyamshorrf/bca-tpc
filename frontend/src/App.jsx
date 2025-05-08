import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebsiteProgress from "./components/WebsiteProgress";

function App() {
  return (
    <div className=" bg-gray-900 min-h-screen bg-grabsolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'ay-900 text-white relative overflow-hidden">
      <div className="relative z-10 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>
      <Footer />
      <WebsiteProgress />
    </div>
  );
}

export default App;
