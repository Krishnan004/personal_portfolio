import React from 'react'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import { Email } from './Email';

const App = () => {
  return (
    <div className="bg-blend-overlay bg-custom-image bg-slate-50 font-karla ">
    
      <BrowserRouter>
        <Header/>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Email/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
