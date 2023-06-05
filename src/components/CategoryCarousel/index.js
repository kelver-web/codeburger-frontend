import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/category-image.png'
import api from '../../services/api'
import {
  Container,
  CategoryImage,
  ContainerItens,
  Image,
  Button
} from './styles'

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImage src={Category} alt="imagem da home page" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Image src={category.url} alt="categorias" />
              <Button>{category.name}</Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel
