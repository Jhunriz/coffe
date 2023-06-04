import { useState } from "react";
import bg from "./image/bg.jpg";
import "./App.css";
import NavBars from "./components/NavBars";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Buttom from "./components/bottom";

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
            <Route path="/about" element={<Homepage />} />
          </Routes>
          <Buttom />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
