import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.png'
import Person from '../../assets/person.png'
import {
  Container,
  ContainerLeft,
  PageLink,
  PageLinkExit,
  ContainerHigth,
  ContainerText,
  Line
} from './styles'

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() => navigate('/')}
          isActive={location.pathname === '/'}
        >
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={location.pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerHigth>
        <PageLink>
          <img
            onClick={() => navigate('/carrinho')}
            src={Cart}
            alt="imagem do carrinho"
          />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="imagem da pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá Kelver</p>

          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerHigth>
    </Container>
  )
}
