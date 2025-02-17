import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/JSX/Payment/Card";
import MainHome from "./MainHome";
import GroupSh from "./components/JSX/Payment/GroupSh";
import DecadeApp from "./components/JSX/Decade/DecadeApp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/card" element={<Card />} />
        <Route path="/detail-decade" element={<DecadeApp />} />
        <Route path="/shopping" element={<GroupSh />} />
      </Routes>
    </Router>
  );
};
export default App;
