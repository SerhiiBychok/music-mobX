import { login } from '@api/auth'

class FormViewModel {
  error = null
  valid = true

  values = {
    email: '',
    password: ''
  }

  getModel() {
    return [
      {
        name: 'email'
        // validator: isEmail
      },
      {
        name: 'password'
        // validator: [minLength(8), maxLength(64), password]
      }
    ]
  }

  onChange(target: HTMLInputElement, name: string) {
    this.values[name] = target.value
  }

  onSubmit = (event: any) => {
    event.preventDefault()
    console.log(this.values)
    try {
      login(this.values)
    } catch (e) {
      console.error(e)
    }
  }

  onSubmitSuccess(response: any) {
    console.log(response)
  }

  onSubmitFail(e: any) {
    if (this.valid) {
      this.error = e && e.error && e.error.error
    }
  }
}

export default FormViewModel
