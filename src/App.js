/**
 * copy right @Jinyoung
 * Except "Navbar.jsx",its from Daniel Y Cheon. 
 * Framework : React, Tailwind CSS
 * All Icons are from Heroicons / MIT License


  
 */
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service";
import Industries from "./Components/Industries";
import HowWeWork from "./Components/HowWeWork";
import Careers from "./Components/Careers";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import EmptyPage from "./Components/EmptyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/howwework" element={<HowWeWork />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/test" element={<EmptyPage />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
