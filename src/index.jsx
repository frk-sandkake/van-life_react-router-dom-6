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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
          <Route path='/vans/:id' element={<VanDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

/**
 * It's possible to add more params to the path
 *
 * Example:
 * <Route path='/vans/:id:/:type' element={<VanDetails />}/>
 * add the van.type for the id in browser:
 *
 * On VanDetails.jsx:
 * const params = useParams()
 * console.log(params)
 *
 *  In Browser:
 * "localhost:5175/vans/2/rugged"
 *
 * log response: {id: "2", type: "rugged"}
 */
ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />);
