import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ScrollToTop from "./hooks/ScroolToTop";
import Startseite from "./pages/Startseite/Startseite";

import MyMixx from "./pages/Mymixx/MyMixx";
import Essencial from "./pages/Essencial/Essencial";
import Dabei from "./pages/Dabei/Dabei";
import Caflex from "./pages/Caflex/Caflex";
import Praxis from "./pages/Praxis/Praxis";

function App() {

  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/MyMixx" element={<MyMixx />} />
        <Route path="/Essencial" element={<Essencial />} />
        <Route path="/Dabei" element={<Dabei />} />
        <Route path="/Praxis" element={<Praxis />} />
        <Route path="/Caflex" element={<Caflex />} />
      </Routes>
    </HashRouter>
  )
}

export default App
