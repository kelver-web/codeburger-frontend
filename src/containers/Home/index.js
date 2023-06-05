import React from 'react'

import HomeLogo from '../../assets/home-image.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, HomeImage } from './styles'

const Home = () => {
  return (
    <Container>
      <HomeImage src={HomeLogo} alt="imagem da home page" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
