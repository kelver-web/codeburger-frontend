import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImage from '../../assets/register-image.svg'
import { Button } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImg,
  ContainerItens,
  Label,
  Input,
  SinginLink,
  ErrrorMensage
} from './styles'

const Register = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-email é obrigratório'),
    password: Yup.string()
      .required('A senha é obirgatória')
      .min(6, 'A senha deve ter no mínimo 6 caractes'),
    confirmPassword: Yup.string()
      .required('A senha é obirgatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('Cadastro realizado com sucesso!')
      } else if (status === 409) {
        toast.error('Email já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! tente novamente')
    }
  }

  return (
    <Container>
      <RegisterImg src={RegisterImage} alt="register-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            placeholder="Nome"
            error={errors.name?.message}
          />
          <ErrrorMensage>{errors.name?.message}</ErrrorMensage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            placeholder="Email"
            error={errors.email?.message}
          />
          <ErrrorMensage>{errors.email?.message}</ErrrorMensage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            placeholder="Senha"
            error={errors.password?.message}
          />
          <ErrrorMensage>{errors.password?.message}</ErrrorMensage>

          <Label error={errors.confirmPassword?.message}>Confirme senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirme senha"
            error={errors.confirmPassword?.message}
          />
          <ErrrorMensage>{errors.confirmPassword?.message}</ErrrorMensage>

          <Button type="submit" style={{ marginTop: 25 }}>
            Sing Up
          </Button>
        </form>

        <SinginLink>
          Já possui conta ?{' '}
          <Link to="/login" style={{ color: 'white' }}>
            Sing In
          </Link>
        </SinginLink>
      </ContainerItens>
    </Container>
  )
}
export default Register
