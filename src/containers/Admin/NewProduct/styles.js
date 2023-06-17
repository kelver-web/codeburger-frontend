import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`

export const Label = styled.p`
  font-size: 16px;
  color: #ffffff;
  border-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  padding-left: 5px;
  margin-bottom: 20px;
`
export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`
