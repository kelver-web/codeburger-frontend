import { PropTypes } from 'prop-types'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export const Admin = () => {
  const location = useLocation()

  return (
    <Container>
      <SideMenuAdmin path={location.pathname} />
      <ContainerItems>
        {location.pathname === paths.Order && <Orders />}
        {location.pathname === paths.Products && <ListProducts />}
        {location.pathname === paths.NewProduct && <NewProduct />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
