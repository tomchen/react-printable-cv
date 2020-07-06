import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import './global_styles/global.scss'
import ButtonMenu from './components/ButtonMenu'
import CVPage from './components/CV'
import ProjectListPage from './components/ProjectList'

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

const App = ({ currentLang, userName, t }) => (
  <ThemeProvider theme={blueTheme}>
    <ButtonMenu />
    <CVPage />
    <ProjectListPage />
    <Helmet>
      <html lang={currentLang} />
      <title>{t('Curriculum vitae of {{userName}}', { userName })}</title>
      <meta
        name="description"
        content={t('Curriculum vitae of {{userName}}', { userName })}
      />
    </Helmet>
  </ThemeProvider>
)

App.propTypes = {
  currentLang: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentLang: state.lang,
  userName: state.userData.name,
})

export default connect(mapStateToProps)(withTranslation()(App))
