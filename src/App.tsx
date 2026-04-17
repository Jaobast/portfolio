import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScroolToTop";
import Startseite from "./pages/Startseite/Startseite";

import MyMixx from "./pages/Mymixx/MyMixx";
import Essencial from "./pages/Essencial/Essencial";
import Targobank from "./pages/Targobank/Targobank";
import Caflex from "./pages/Caflex/Caflex";
import Praxis from "./pages/Praxis/Praxis";

import Cv from "./pages/Cv/Cv";

function App() {

  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/MyMixx" element={<MyMixx />} />
        <Route path="/Essencial" element={<Essencial />} />
        <Route path="/Targobank" element={<Targobank />} />
        <Route path="/Praxis" element={<Praxis />} />
        <Route path="/Caflex" element={<Caflex />} />
        <Route path="/Cv" element={<Cv />} />
      </Routes>
    </HashRouter>
  )
}

export default App
