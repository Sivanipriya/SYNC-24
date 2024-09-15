import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./components/Events/Events";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="bg--100 h-screen">

    {/* //Header component - navbar

    //Home page

    //About

    //Events */}
    <Events />
    {/* //Contact */}
    </div>
  );
}

export default App;
