import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { AiFillHome } from 'react-icons/ai'
import { MdLocationOn, MdMail } from 'react-icons/md'
import {
  FaMobileAlt,
  FaTwitter,
  FaGithub,
  FaBirthdayCake,
  FaFlag,
} from 'react-icons/fa'
import topStyle from './index.scss'
import { autoDetectDmy, age } from '../../timeFormat'

const typeMapping = {
  adresse: {
    name: 'Adresse',
    icon: <MdLocationOn />,
  },
  tel: {
    name: 'Telephone number',
    icon: <FaMobileAlt />,
  },
  email: {
    name: 'Email',
    icon: <MdMail />,
  },
  birth_date: {
    name: 'Birth date',
    icon: <FaBirthdayCake />,
  },
  birth_place: {
    name: 'Birth place',
    icon: <FaFlag />,
  },
  website: {
    name: 'Website',
    icon: <AiFillHome />,
  },
  github: {
    name: 'GitHub',
    icon: <FaGithub />,
  },
  twitter: {
    name: 'Twitter',
    icon: <FaTwitter />,
  },
}

const InfoLine = ({ type, text, url, isNotExtUrl, isSocial }) => (
  <div
    className={cx({
      [topStyle.social]: isSocial,
      [topStyle.infoline]: true,
    })}
    data-type={type}
  >
    <span
      title={typeMapping[type].name}
      aria-label={typeMapping[type].name}
      className={topStyle.svgwrapper}
    >
      {typeMapping[type].icon}
    </span>
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
        {type === 'birth_date'
          ? `${autoDetectDmy(text, 'fr')} (${age(text, 'fr')})`
          : text}
      </span>
    )}
  </div>
)

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
}

export default InfoLine
