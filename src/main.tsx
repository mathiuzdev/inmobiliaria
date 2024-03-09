import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Contact } from './pages/Contact.tsx';
import { Tasar } from './pages/Tasar.tsx';
import { Comprar } from './pages/Comprar.tsx';
import { Index } from './pages/Index.tsx';
import { Home } from './pages/Home.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="/" element={<Index/>} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/tasaciones' element={<Tasar />} />
        <Route path='/comprar' element={<Comprar />} />
        <Route path='/casa' element={<Home />} />
      </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
