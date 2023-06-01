import { useState } from "react";
import bg from "./image/bg.jpg";
import "./App.css";
import NavBars from "./components/NavBars";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

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
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
