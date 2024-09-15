import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./components/Events/Events";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
