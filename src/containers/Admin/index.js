import React from 'react'

import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
// import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export const Admin = () => {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {/* <Orders /> */}
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}
