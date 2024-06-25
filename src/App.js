
import './App.css';
import About from './routes/About.js';
import Home from './routes/Home.js';
import { Routes, Route } from "react-router-dom";

import Contact from './routes/Contact.js';
import Service from './routes/Service.js';




export default function App(){
  return(
    <div className='App'>
    <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About />} />
<Route path='/service' element={<Service />} />
  <Route path='/contact' element={<Contact />} />
    </Routes>

      
     
    </div>
  )
}