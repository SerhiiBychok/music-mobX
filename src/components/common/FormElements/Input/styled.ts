import styled from 'styled-components'

interface IInput {
  isError?: boolean
  isValid?: boolean
  secondary?: boolean
}

const Input = styled.input<IInput>`
    width: 100%;
    border-radius: 0;
    border: 0.0625rem solid transparent;
    font-size: 0.75rem;
    color: #fff;
    padding: 0 0.5rem;
    box-sizing: border-box;
    transition: 0.3s;
    font-family: inherit;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-family: inherit;
    }
    ${({ isError, isValid }) =>
      isError
        ? `
        border-color: #bc5432;
      `
        : isValid
        ? `
        border-color: #3c9b24;
      `
        : `
      &:focus {
          border-color: #4c4c4c;
      }
      `};
      ${({ secondary }) =>
        secondary
          ? `
          height: 2.375rem;
          background-color: #3b3b3b;
      `
          : `
          height: 2rem;
          background-color: #303030;
    `};
    /*
    &:-webkit-autofill {
        -webkit-animation-name: ${({ secondary }) =>
          secondary ? 'autofillSecondary' : 'autofill'};
        -webkit-animation-fill-mode: both;
    }
    */
    &:hover:not(:focus):not([disabled]) {
        background-color: #3b3b3b;
    }
    &:focus {
        background-color: #191919;
    }
    &[disabled] {
        border-color: #4c4c4c;
        color: #878787;
        background-color: #232323;
    }
`

const Addon = styled.div`
  position: absolute;
  right: 0.5rem;
  font-size: 0.75rem;
  color: #878787;
  font-weight: 500;
  top: 50%;
  transform: translateY(-50%);
`

const Img2fa = styled('img')`
  width: 1.375rem;
  height: 1.375rem;
  margin-top: -0.1875rem;
`
const AddonWrap = styled.div`
  position: relative;
`
export { Input, Addon, Img2fa, AddonWrap }
