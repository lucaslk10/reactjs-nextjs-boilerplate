import { isString } from 'lodash'

const theme = {
  colors: {
    background: '#121214',
    'text-default': '#e1e1e6',
    primary: '#3498db'
  },
  spacing: (...args) => {
    return args.map(item => (isString(item) ? item : `${8 * item}px`)).join(' ')
  },
  textStyles: {
    font: 'Roboto, sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px'
    },
    h2: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '24px'
    },
    title: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px'
    },
    body1: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14px'
    }
  },
  textStyle: style => `
    font-size: ${theme.textStyles[style].fontSize};
    font-weight: ${theme.textStyles[style].fontWeight};
    line-height: ${theme.textStyles[style].lineHeight};
    font-family: ${theme.textStyles.font};
  `
}

export default theme
