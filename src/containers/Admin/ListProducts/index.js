import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, EditIconStyles, Title } from './styles'

const ListProducts = () => {
  const [produtcts, setProducts] = useState()
  const navigate = useNavigate()
  const now = new Date()
  const day = now.getDate()
  const month = now.getMonth() + 1
  const year = now.getFullYear()
  const date = `${day}/${month}/${year}`
  console.log(produtcts)

  useEffect(() => {
    const loadOrders = async () => {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])

  const isOffer = offerStatus => {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#00FF00' }} />
    }
    return <CancelIcon style={{ color: '#ff4500' }} />
  }

  const editProduct = product => {
    navigate(paths.EditProduct, { state: { product } })
  }

  return (
    <Container>
      <Title>
        <h4>Listagem de Produtos </h4>
        <h4>
          Data: <b style={{ fontSize: '13px', fontWeight: 'normal' }}>{date}</b>
        </h4>
      </Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtcts &&
              produtcts.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="imagem-produto"></Img>
                  </TableCell>
                  <TableCell>
                    <EditIconStyles onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
