import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import './global_styles/global.scss'
import ButtonMenu from './components/ButtonMenu'
import CVPage from './components/Page/CVPage'

const blueTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"PingFang SC"',
      '"Hiragino Sans GB"',
      '"Microsoft YaHei"',
      '"WenQuanYi Micro Hei"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

const App = () => (
  <ThemeProvider theme={blueTheme}>
    <ButtonMenu />
    <CVPage />
  </ThemeProvider>
)

export default App
