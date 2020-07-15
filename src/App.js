import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import CircularProgress from '@material-ui/core/CircularProgress'
import { changeLangAsync } from './actions'
import './global_styles/global.scss'
import ButtonMenu from './components/ButtonMenu'
import CVPage from './components/CV'
import ProjectListPage from './components/ProjectList'

const settings = require('Settings')

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

const useStyles = makeStyles({
  circularProgressRoot: {
    position: 'absolute',
    top: 'calc(50% - 10px)',
    left: 'calc(50% - 10px)',
  },
})

const App = ({ currentLang, userName, dispatch, t }) => {
  const classes = useStyles()

  useEffect(() => {
    dispatch(changeLangAsync(settings.default_lang))
  }, [])

  return (
    <ThemeProvider theme={blueTheme}>
      <ButtonMenu />
      {userName ? (
        <>
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
        </>
      ) : (
        <CircularProgress classes={{ root: classes.circularProgressRoot }} />
      )}
    </ThemeProvider>
  )
}

App.propTypes = {
  currentLang: PropTypes.string,
  userName: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentLang: state.lang,
  userName: state.userData.name,
})

export default connect(mapStateToProps)(withTranslation()(App))
