import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/products-logo.svg'
import api from '../../services/api'
import {
  Container,
  ProductsImage,
  CategoryButton,
  CategoryMenu
} from './styles'

const Products = () => {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()
  }, [])
  return (
    <Container>
      <ProductsImage src={ProductLogo} alt="imagem da home page" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
    </Container>
  )
}

export default Products
