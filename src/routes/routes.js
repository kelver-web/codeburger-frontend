import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
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
        </Route>
      </Routes>
    </Router>
  )
}

export default myRoutes
