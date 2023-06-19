import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div``

export const Img = styled.img`
  width: 60px;
  border-radius: 5px;
`
export const EditIconStyles = styled(EditIcon)`
  cursor: pointer;
  color: #323d5d;

  &:hover {
    transform: scale(1.1);
    animation: treme 0.2s;
  }
  @keyframes treme {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 5px;
    }
    50% {
      margin-left: 0;
    }
    75% {
      margin-left: -5px;
    }
    100% {
      margin-left: 0;
    }
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 5px;
`
