import styled from 'styled-components'
import theme from 'styles/theme'

const resolveColor = props => {
  const { color } = props

  return theme.colors[color || 'black']
}

const resolveTextStyle = props => {
  const { textStyle } = props

  return theme.textStyle(textStyle || 'body1')
}

const resolveTextAlign = props => {
  const { textAlign } = props

  if (!textAlign) {
    return ''
  }

  return `
    text-align: ${textAlign};
    width: 100%;
  `
}

const Span = styled.span`
  color: ${resolveColor};
  text-decoration: none;

  ${resolveTextAlign}
  ${resolveTextStyle}
`

const H1 = styled.h1`
  color: ${resolveColor};
  text-decoration: none;

  ${resolveTextAlign}
  ${resolveTextStyle}
`

export { Span, H1 }
