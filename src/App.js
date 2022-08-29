import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import NetflixShow from './pages/NetflixShow';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/netflix-show' element={<NetflixShow/>}  />
        </Routes>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
