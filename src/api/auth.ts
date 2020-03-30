import { fetcher } from 'data-fetcher'

export interface ILoginRequest {
  email: string
  password: string
}

export function login(body: ILoginRequest) {
  return fetcher(
    '/auth/login',
    {
      method: 'POST',
      body
    },
    false
  )
}

export interface IRegisterRequest {
  email: string
  password: string
  firstName: string
  lastName: string
}

export function register(body: ILoginRequest) {
  return fetcher(
    '/users/register',
    {
      method: 'POST',
      body
    },
    false
  )
}
