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
} from 'react-icons/fa'
import { GrFlagFill } from 'react-icons/gr'

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
    icon: <GrFlagFill />,
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

const InfoLine = ({ type, text, url, iconOnly, isInlineBlock }) => (
  <div
    className={cx({
      'inline-block': isInlineBlock,
    })}
  >
    <span
      title={typeMapping[type].name}
      aria-label={typeMapping[type].name}
    >
      {typeMapping[type].icon}
    </span>
    {!iconOnly && (url ? <a href={url}>{text}</a> : <span>{text}</span>)}
  </div>
)

InfoLine.defaultProps = {
  url: null,
  iconOnly: false,
  isInlineBlock: false,
}

InfoLine.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  iconOnly: PropTypes.bool,
  isInlineBlock: PropTypes.bool,
}

export default InfoLine
