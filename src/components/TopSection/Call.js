import React from 'react'
import PropTypes from 'prop-types'
import CallIcon from '@material-ui/icons/Call'
import Tooltip from '@material-ui/core/Tooltip'
import topStyle from './index.scss'

const Call = ({ tel, title }) => {
  const b = (
    <button
      type="button"
      className={`${topStyle.svgwrapper} ${topStyle.call}`}
      onClick={() => {
        window.location.href = `tel:${tel}`
      }}
    >
      <CallIcon />
    </button>
  )
  if (title) {
    return <Tooltip title={title}>{b}</Tooltip>
  }
  return b
}

Call.defaultProps = {
  title: null,
}

Call.propTypes = {
  tel: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Call
