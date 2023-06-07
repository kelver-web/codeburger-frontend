import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Cart, Home, Login, Products, Register } from '../containers'
import PrivateRoute from './private-routes'

const myRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default myRoutes
