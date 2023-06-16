import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Admin, Cart, Home, Login, Products, Register } from '../containers'
import PrivateRoute from './private-routes'

const myRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path="/"
        />
        <Route
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
          path="/produtos"
        />
        <Route
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
          path="/carrinho"
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path="/pedidos"
        />
      </Routes>
    </Router>
  )
}

export default myRoutes
