import styled from 'styled-components'

import ImageBackground from '../../../assets/background.svg'
import { Button } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('${ImageBackground}');

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`
export const Div = styled.div`
  .select {
    border-radius: 5px;
    border: ${props => (props.error ? '2px solid #ff4500' : 'none')};
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
  border: ${props => (props.error ? '2px solid #ff4500' : 'none')};
  padding-left: 5px;
  min-width: 280px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
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
  border: ${props =>
    props.error ? '2px dashed #ff4500' : '1px dashed #ffffff'};
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
`
export const InputUpload = styled.input`
  opacity: 0;
  width: 1px;
`
