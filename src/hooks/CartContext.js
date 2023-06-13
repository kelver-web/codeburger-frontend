import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updatLocalStore = async products => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prod => prod.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity += 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await updatLocalStore(newCartProducts)
  }

  const deleteProducts = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)

    if (newCart) {
      alert('tem certeza que gostaria de deletar esse produto!')
      setCartProducts(newCart)
      await updatLocalStore(newCart)

      toast.success('Produto deletado com sucesso!')
    }
  }

  const increaseProducts = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await updatLocalStore(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(prod => prod.id === productId)

    if (cartProducts[cartIndex].quantity > 0) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await updatLocalStore(newCart)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        deleteProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
