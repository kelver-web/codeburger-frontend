import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

const NewProduct = () => {
  useEffect(() => {
    const loadOrders = async () => {
      const { data } = await api.get('products')
    }
    loadOrders()
  }, [])

  return (
    <Container>
      <h1>Ok</h1>
    </Container>
  )
}

export default NewProduct
