import React from 'react'

import CartLogo from '../../assets/cart-logo.svg'
// import { CategoryCarousel, OffersCarousel } from '../../components'
import { CartItems, CartResume } from '../../components'
import { Container, CartImage, Wrapper } from './styles'

export const Cart = () => {
  return (
    <Container>
      <CartImage src={CartLogo} alt="imagem do carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
