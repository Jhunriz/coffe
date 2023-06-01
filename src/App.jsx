import { useState } from "react";
import bg from "./image/bg.jpg";
import "./App.css";
import NavBars from "./components/NavBars";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <NavBars />
      </div>
    </>
  );
}

export default App;
