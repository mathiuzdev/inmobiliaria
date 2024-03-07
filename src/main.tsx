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
import { Home } from './pages/Home.tsx';
import { Tasar } from './pages/Tasar.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/tasaciones' element={<Tasar />} />
      </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
