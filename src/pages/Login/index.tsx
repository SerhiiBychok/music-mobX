import React from 'react'
import Form from './Form/FormView'
import FormModel from './Form/FormViewModel'

function Login() {
  const model = new FormModel()
  return <Form form={model} />
}

export default Login
