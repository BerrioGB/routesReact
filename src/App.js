import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./component/Links"
import Navbar from "./component/Navbar"
import Inicio from "./component/Inicio"
import About from "./component/About"
import Footer from './component/footer';
import Imagen from './component/Imagen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Imagen/>
      <Links/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>

      <iframe src="" name="iframe" title="Iframe" width="1500px" className="iframe" height="400px"></iframe>

      <Footer />
    </div>
  );
}

export default App;
