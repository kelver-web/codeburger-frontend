// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import EnhancedEncryptionRoundedIcon from '@mui/icons-material/EnhancedEncryptionRounded'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ListAltRoundedIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: EnhancedEncryptionRoundedIcon
  }
]

export default listLinks
