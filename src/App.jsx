import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Courses from './pages/courses/Courses';
import News from './pages/news/News';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import "./assets/style/style.css";
import "./assets/style/general.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

function App() {
  return ( 
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>   
        <Route path='/login' element={<Login/>}/> 

      </Routes>

      <Footer />
    
    </>
  );
}

export default App;
