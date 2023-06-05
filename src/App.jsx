import { useState } from "react";
import bg from "./image/bg.jpg";
import "./App.css";
import NavBars from "./components/NavBars";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Buttom from "./components/bottom";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <BrowserRouter>
          <NavBars />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Buttom />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
