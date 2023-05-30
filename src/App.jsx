import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Courses from './pages/courses/Courses';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/style.css";
import "./assets/style/general.css";

function App() {
  return ( 
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
