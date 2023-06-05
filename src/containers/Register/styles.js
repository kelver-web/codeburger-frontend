import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('${Background}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterImg = styled.img`
  height: 90%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 90%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #ff4500' : 'none')};
  padding-left: 10px;
`

export const SinginLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-top: 28px;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`
export const ErrrorMensage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ff4500;
  margin-top: 5px;
`
