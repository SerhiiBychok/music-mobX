import styled from 'styled-components'

interface IButtonStyl {
  bigger?: boolean
  extraBig?: boolean
  red?: boolean
  blue?: boolean
  inline?: boolean
  transparent?: boolean
  grey?: boolean
  loading?: boolean
  noPadding?: boolean
}

const ButtonStyl = styled.button<IButtonStyl>`
  text-align: center;
  width: 100%;
  font-size: 0.875rem;
  color: #fff;
  letter-spacing: 0.04375rem;
  white-space: nowrap;
  border: none;
  padding: 0 1.25rem;
  cursor: pointer;
  transition: 0.3s;
  text-transform: uppercase;
  ${({ inline }) =>
    !inline ? `margin-top: 1rem;display: inline-block;` : `display: block;`};
  &[disabled] {
    user-select: none;
    cursor: default;
    ${({ loading }) => !loading && 'opacity: 0.4;'}
  }
  &:not([disabled]):hover {
    filter: brightness(1.1);
  }

  ${({ bigger, extraBig }) =>
    bigger
      ? `
    height: 2.5rem;
    line-height: 2.5rem;
    `
      : extraBig
      ? `
      height: 2.5rem;
      line-height: 2.5rem;
      @media(min-width: 768px){
        height: 3rem;
        line-height: 3rem;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.6px;
      }
    `
      : `
    height: 2.25rem;
    line-height: 2.25rem;
    `};

  ${({ red, blue }) =>
    red
      ? `
        background-color: #bc5432;
        &:not([disabled]):active {
            background-color: #95452b;
        }
    `
      : blue
      ? `
       background-color: #217dcb;
       &:not([disabled]){
            &:hover {
                background-color: #1d96fb;
            }
            &:active {
                background-color: #1c64a1;
            }
        }
        &[disabled] {
            background-color: #112e48;
        }
    `
      : `
       background-color: #3c9b24;
       &:not([disabled]):active {
            background-color: #337c21;
       }
    `};
  ${({ grey }) =>
    grey &&
    `
            background-color: #303030;
            &:not([disabled]):active {
                background-color: #191919;
           }
    `};
  ${({ transparent }) =>
    transparent &&
    `
        background-color: transparent;
        color:#1D96FB;
        &:not([disabled]):hover {
            color: #fff;
        }
    `};

  ${({ noPadding }) => noPadding && `padding: 0;`}
`
export { ButtonStyl }
