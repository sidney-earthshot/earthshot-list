import React, { useState, useRef, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import {
  IconCaretDownFilled,
  IconPlus,
  IconTorii,
  IconCurrencyEuro,
  IconBallAmericanFootball,
  IconBallFootball,
  IconMountain,
  IconRipple,
  IconCactus,
} from "@tabler/icons-react";

import "./App.css";

import Home from "./pages/Home";
import CountryModal from "./components/CountryModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:countryName" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
