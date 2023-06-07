import React from 'react'

import CartLogo from '../../assets/cart-logo.svg'
// import { CategoryCarousel, OffersCarousel } from '../../components'
import { CartItems } from '../../components'
import { Container, CartImage } from './styles'

export const Cart = () => {
  return (
    <Container>
      <CartImage src={CartLogo} alt="imagem do carrinho" />
      <CartItems />
    </Container>
  )
}
