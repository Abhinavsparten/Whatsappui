import { useState,useEffect } from 'react'
import './App.css'
import { Navigate,Route, Routes } from "react-router-dom";
import WhatsApp from './WhatsApp';

function App() {


  return (
    <Routes>    
    <Route path="/" element={<WhatsApp />} />
    </Routes>
  )
}

export default App
