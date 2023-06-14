import PropTypes from 'prop-types'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../components'

const PrivateRoute = ({ component, ...rest }) => {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      <Outlet {...rest} element={component} />
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
