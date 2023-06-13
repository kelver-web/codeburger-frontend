import React from 'react'

import Trash from '../../assets/trash.svg'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export const CartItems = () => {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } =
    useCart()
  console.log(cartProducts)

  return (
    <Container>
      <Header>
        <p></p>
        <p>Items</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <div className="trash">
              <p>{formatCurrency(product.quantity * product.price)}</p>
              <button
                className="button-trash"
                onClick={() =>
                  window.confirm(
                    'Tem certeza que deseja deletar este produto?'
                  ) && deleteProducts(product.id)
                }
              >
                <img src={Trash} />
              </button>
            </div>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
    </Container>
  )
}
