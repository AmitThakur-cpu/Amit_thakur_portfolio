import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import "tailwindcss";
import Home from './pages/Home';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/contect" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
