import styled from 'styled-components'

export const Container = styled.div``

export const ProductsImage = styled.img`
  width: 100%;
`
export const CategoryButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9a9a9d')};
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`
