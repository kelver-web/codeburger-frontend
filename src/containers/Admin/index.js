import React from 'react'

import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
// import Orders from './Orders'
import { Container } from './styles'

export const Admin = () => {
  return (
    <Container>
      <SideMenuAdmin />
      {/* <Orders /> */}
      <ListProducts />
    </Container>
  )
}
