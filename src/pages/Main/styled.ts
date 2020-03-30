import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  padding-bottom: 60px;
  box-sizing: border-box;
`

const Sidebar = styled.aside`
  width: 220px;
  border-right: 1px solid #eaeaea;
`

const Content = styled.div`
  flex: 1;
  overflow: auto;
`

export { Wrap, Sidebar, Content }
