import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css"
import Auth from "./components/Auth";
import ProductDetail from "./components/ProductDetail";
import UserProfile from "./components/UserProfile";


import { UserProvider } from "./components/UserContext";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
    <UserProvider>
      <div className="display">
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} setSearch={setSearch} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </div>
    </UserProvider>
    </>
  );
}

export default App;
