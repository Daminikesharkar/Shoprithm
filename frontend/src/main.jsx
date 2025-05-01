import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Home from './pages/Home.jsx';
import Authcontext from './context/Authcontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Authcontext>
  </StrictMode>
)
