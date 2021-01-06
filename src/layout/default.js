import React from 'react'
import styled from 'styled-components'
import theme from 'styles/theme'
import { H1 } from 'components/common/text'

export const Main = styled.main`
  background-color: ${theme.colors.background};

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > :not(:last-child) {
    margin-bottom: ${theme.spacing(2)};
  }
`

const DefaultLayout = props => {
  const { children } = props

  return (
    <Main id="main">
      <H1 color="text-default" textStyle="h1">
        Boilerplate by Lucas Gustavo
      </H1>
      {children}
    </Main>
  )
}

export default DefaultLayout
