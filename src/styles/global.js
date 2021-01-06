import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  } 

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: ${props => props.theme.textStyles.font};  
  }
`
