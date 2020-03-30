import styled from 'styled-components'

const Wrap = styled.form`
  position: sticky;
  top: 0;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  padding: 0 23px;
  box-sizing: border-box;
  path {
    fill: #fff;
  }
  input {
    flex: 1;
    font-size: 16px;
    height: 32px;
    padding-left: 14px;
    padding-right: 14px;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    color: #fff;
  }
`

export { Wrap }
