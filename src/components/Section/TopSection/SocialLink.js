import React from 'react'
import PropTypes from 'prop-types'
import InfoLine from './InfoLine'

const SocialLink = ({ type, id, url }) => (
  <InfoLine type={type} text={id} url={url} isInlineBlock />
)

SocialLink.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default SocialLink
