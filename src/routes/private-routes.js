import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '../components'

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  if (children.props.isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return (
    <>
      {!children.props.isAdmin && <Header />}
      {children}
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
