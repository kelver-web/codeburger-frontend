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
  min-width: 280px;
`
export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;

  input {
    opacity: 0;
    width: 1px;
  }
`
