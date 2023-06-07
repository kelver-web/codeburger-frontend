import React from 'react'

import HomeLogo from '../../assets/home-image.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImage } from './styles'

export const Home = () => {
  return (
    <Container>
      <HomeImage src={HomeLogo} alt="imagem da home page" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
