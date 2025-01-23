import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/JSX/Payment/Card";
import MainHome from "./MainHome";
import Decade from "./components/JSX/Decade/Decade";
import GroupSh from "./components/JSX/Payment/GroupSh";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/card" element={<Card />} />
        <Route path="/detail-decade" element={<Decade />} />
        <Route path="/shopping" element={<GroupSh />} />
      </Routes>
    </Router>
  );
};
export default App;
