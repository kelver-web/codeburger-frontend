import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SinginLink,
  ErrrorMensage
} from './styles'

const Login = () => {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-email é obrigratório'),
    password: Yup.string()
      .required('A senha é obirgatória')
      .min(6, 'A senha deve ter no mínimo 6 caractes')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados!',
        success: 'Seja bem-vindo(a)!',
        error: 'Verifique seu e-mail e senha!'
      }
      // { validateStatus: () => true }
    )

    putUserData(data)

    setTimeout(() => {
      navigate('/')
    }, 1000)

    //   if (status === 200 || status === 201) {
    //     toast.success('Seja bem-vindo(a)!')
    //   } else if (status === 400) {
    //     toast.error('Verifique seu e-mail ou senha')
    //   } else {
    //     throw new Error()
    //   }
    // } catch (err) {
    //   toast.error('Erro interno do sistema!')
    // }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            placeholder="Email"
            error={errors.email?.message}
          />
          <ErrrorMensage>{errors.email?.message}</ErrrorMensage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            placeholder="Senha"
            error={errors.password?.message}
          />
          <ErrrorMensage>{errors.password?.message}</ErrrorMensage>

          <Button type="submit" style={{ marginTop: 75 }}>
            Sing In
          </Button>
        </form>

        <SinginLink>
          Não possui conta ?{' '}
          <Link to="/cadastro" style={{ color: 'white' }}>
            Sing Up
          </Link>
        </SinginLink>
      </ContainerItens>
    </Container>
  )
}
export default Login
