import logo from "./logo.svg";
import "./App.css";
import Parca from "./pages/parcalarim";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ResponsiveAppBar from "./components/NavBar";
import Muayene from "./pages/muayene";
import Bakım from "./pages/bakım";
import Sigorta from "./pages/sigorta";
import Servis from "./pages/servis";
import Edevlet from "./pages/e_devlet";
import Aracım from "./pages/arac";
import Kayit from "./pages/kayit";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {

  return (
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
      <Routes>
          <Route index element={<Home />} />
          <Route path="parca" element={<Parca />} />
          <Route path="home" element={<Home />} />
          <Route path="muayene" element={<Muayene />} />
          <Route path="bakım" element={<Bakım />} />
          <Route path="sigorta" element={<Sigorta />} />
          <Route path="servis" element={<Servis />} />
          <Route path="aracsatis" element={<Aracım />} />




          <Route path="devlet" element={<Edevlet />} />
          <Route path="kayit" element={<Kayit />} />



      </Routes>
      </Web3ReactProvider>
    </BrowserRouter>
  );
}

export default App;
