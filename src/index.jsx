import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetails from './pages/vans/VanDetails'
import NotFound from './pages/NotFound'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import VansHost from './pages/host/VansHost'
import VanDetailsHost from './pages/host/VanDetailsHost'
import VanInfoHost from './pages/host/VanInfoHost'
import VanPricingHost from './pages/host/VanPricingHost'
import VanPhotosHost from './pages/host/VanPhotosHost'
import LayoutMain from './components/LayoutMain'
import LayoutHost from './components/LayoutHost'

import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />

          <Route path='host' element={<LayoutHost />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<VansHost />} />
            <Route path='vans/:id' element={<VanDetailsHost />}>
              <Route index element={<VanInfoHost />} />
              <Route path='pricing' element={<VanPricingHost />} />
              <Route path='photos' element={<VanPhotosHost />} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
