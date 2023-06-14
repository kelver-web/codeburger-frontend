import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555555')};
  font-style: normal;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  font-size: 16px;
  line-height: 19px;
`

export const ContainerHigth = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`

export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`
export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #9758a6;
  cursor: pointer;
`
