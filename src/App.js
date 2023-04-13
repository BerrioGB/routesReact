import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./component/Links"
import Navbar from "./component/Navbar"
import Inicio from "./component/Inicio"
import Css from "./component/css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Links/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Css" element={<Css/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
