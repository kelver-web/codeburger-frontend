import styled from 'styled-components'

import ImageBackground from '../../../assets/background.svg'
import { Button } from '../../../components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${ImageBackground}');

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`
export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  min-width: 280px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  padding: 10px;
`
export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;

  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
export const InputUpload = styled.input`
  opacity: 0;
  width: 1px;
`
export const Div = styled.div`
  .select {
    border-radius: 5px;
    border: ${props => (props.error ? '2px solid #ff4500' : 'none')};
  }
`
