import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutMain from './components/LayoutMain'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetails from './pages/vans/VanDetails'

import "./server"
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
          <Route path='/vans/:id' element={<VanDetails />}/>

          <Route path='/host' element={<Dashboard />}>
            <Route path='/host/income' element={<Income />}/>
            <Route path='/host/reviews' element={<Reviews />}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />);
