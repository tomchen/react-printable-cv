import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import { withTranslation } from 'react-i18next'
import PlaceIcon from '@material-ui/icons/Place'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'
import CakeIcon from '@material-ui/icons/Cake'
import FlagIcon from '@material-ui/icons/Flag'
import HomeIcon from '@material-ui/icons/Home'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import topStyle from './index.scss'
import { autoDetectDmy, age } from '../../../utils/timeFormat'
import Copy from './Copy'
import Call from './Call'

const useStyles = makeStyles({
  tooltip: {
    fontSize: '0.8rem',
    textAlign: 'center',
  },
})

const InfoLine = ({
  type,
  text,
  url,
  isNotExtUrl,
  isSocial,
  currentLang,
  t,
}) => {
  const classes = useStyles()
  const typeMapping = {
    address: {
      name: t('Address'),
      icon: PlaceIcon,
    },
    tel: {
      name: t('Telephone number'),
      icon: PhoneAndroidIcon,
    },
    email: {
      name: t('Email'),
      icon: EmailIcon,
    },
    birth_date: {
      name: t('Birth date'),
      icon: CakeIcon,
    },
    birth_place: {
      name: t('Birth place'),
      icon: FlagIcon,
    },
    website: {
      name: t('Website'),
      icon: HomeIcon,
    },
    github: {
      name: t('GitHub'),
      icon: GitHubIcon,
    },
    twitter: {
      name: t('Twitter'),
      icon: TwitterIcon,
    },
  }
  const typeLower = type.toLowerCase()
  const TypeIcon = typeMapping[typeLower].icon

  return (
    <div
      className={cx({
        [topStyle.social]: isSocial,
        [topStyle.infoline]: true,
      })}
      data-type={typeLower}
    >
      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title={typeMapping[typeLower].name}
      >
        <span
          className={`${topStyle.svgwrapper} ${topStyle.fronticon}`}
          aria-label={typeMapping[typeLower].name}
        >
          <TypeIcon />
        </span>
      </Tooltip>
      {url ? (
        <a
          href={url}
          className={topStyle.text}
          target={isNotExtUrl ? undefined : '_blank'}
          rel={isNotExtUrl ? undefined : 'noopener noreferrer'}
        >
          {text}
        </a>
      ) : (
        <span className={topStyle.text}>
          {typeLower === 'birth_date'
            ? `${autoDetectDmy(text, currentLang)} (${age(text, currentLang)})`
            : text}
        </span>
      )}
      {typeLower === 'tel' && (
        <>
          <Copy text={text} title={t('Copy phone number')} />
          <Call tel={text} title={t('Call the number')} />
        </>
      )}
      {typeLower === 'email' && (
        <Copy text={text} title={t('Copy Email address')} />
      )}
    </div>
  )
}

InfoLine.defaultProps = {
  url: null,
  isNotExtUrl: false,
  isSocial: false,
}

InfoLine.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  isNotExtUrl: PropTypes.bool,
  isSocial: PropTypes.bool,
  currentLang: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentLang: state.lang,
})

export default connect(mapStateToProps)(withTranslation()(InfoLine))
