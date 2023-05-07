import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import SignIn from "./SignIn";
import HomePage from "./HomePage";
import MapView from "./MapView";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/mapview/:cityId" element={<MapView/>} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AllRoutes;
