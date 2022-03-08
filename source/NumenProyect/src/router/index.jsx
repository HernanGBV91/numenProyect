import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import NotFound from '../views/NotFound'
import Products from '../views/Products'
import Anuncio from '../components/Anuncio/Anuncio'
import Head from '../layouts/Header/Head'

const index = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <CssBaseline />
        <Anuncio></Anuncio>
        <Head></Head>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default index
