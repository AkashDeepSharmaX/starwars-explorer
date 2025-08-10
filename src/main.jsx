import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Film from './components/Film.jsx'
import People from './components/People.jsx'
import Planet from './components/Planet.jsx'
import Species from './components/Species.jsx'
import Vehicle from './components/Vehicle.jsx'
import Layout from './components/Layout.jsx'
import FilmDetails from './components/FilmDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>


          <Route index element={<Film />} />
          <Route path='/FilmDetails/:id' element={<FilmDetails />} />


          <Route path='/people' element={<People />} />
          <Route path='/planet' element={<Planet />} />
          <Route path='/species' element={<Species />} />
          <Route path='/vehicle' element={<Vehicle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
