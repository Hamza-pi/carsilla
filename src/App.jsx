// Imports
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import SellerProfiles from "./pages/SellerProfiles";
import UserProfiles from "./pages/UserProfiles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="user" element={<Users />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="sellerprofiles" element={<SellerProfiles />} />
            <Route path="userprofiles" element={<UserProfiles/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
