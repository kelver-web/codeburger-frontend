import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

const Button = ({ children, ...rest }) => {
  return <ContainerButton {...rest}>{children}</ContainerButton>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
