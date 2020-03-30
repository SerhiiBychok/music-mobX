import { Button, Input } from '@common/FormElements'
import React from 'react'

import FormViewModel from './FormViewModel'

interface IProps {
  form: FormViewModel
}

const FormView = ({ form }: IProps) => (
  <form onSubmit={form.onSubmit}>
    {/*{form.error && <p>{form.error}</p>}*/}
    <Input
      label="firstName"
      onChange={({ target }: { target: HTMLInputElement }) =>
        form.onChange(target, 'firstName')
      }
    />
    <Input
      label="secondName"
      onChange={({ target }: { target: HTMLInputElement }) =>
        form.onChange(target, 'lastName')
      }
    />
    <Input
      label="yourEmail"
      onChange={({ target }: { target: HTMLInputElement }) =>
        form.onChange(target, 'email')
      }
    />
    <Input
      label="password"
      type="password"
      onChange={({ target }: { target: HTMLInputElement }) =>
        form.onChange(target, 'password')
      }
    />
    <Button type="submit">logIn</Button>
  </form>
)

export default FormView
