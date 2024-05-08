import "./App.css";
import Home from "./routes/Home/Home.jsx";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Officinae from "./routes/Interview/Officinae/Officinae.jsx";
import NeiMieiPanni from "./routes/Interview/NeiMieiPanni/NeiMieiPanni.jsx";
import SophieStique from "./routes/Interview/SophieStique/SophieStique.jsx";
import AlbiniGroup from "./routes/Interview/AlbiniGroup/AlbiniGroup.jsx";
import ERTKingdom from "./routes/Interview/ERTKingdom/ERTKingdom.jsx";
import LaBottegaDiGiorgia from "./routes/Interview/LaBottegaDiGiorgia/LaBottegaDiGiorgia.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/interview" element={<NeiMieiPanni />} />
        <Route path="/interview/neimieipanni" element={<NeiMieiPanni />} />
        <Route path="/interview/officinae" element={<Officinae />} />
        <Route path="/interview/sophiestique" element={<SophieStique />} />
        <Route path="/interview/albinigroup" element={<AlbiniGroup />} />
        <Route path="/interview/ertkingdom" element={<ERTKingdom />} />
        <Route path="/interview/labottegadigiorgia" element={<LaBottegaDiGiorgia />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
