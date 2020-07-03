import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import Tooltip from '@material-ui/core/Tooltip'
import copy from 'copy-to-clipboard'
import topStyle from './index.scss'

const Copy = ({ text, title, t }) => {
  const [copied, setCopied] = useState(false)
  const b = (
    <button
      type="button"
      className={`${topStyle.svgwrapper} ${topStyle.copy}`}
      onClick={() => {
        copy(text)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      }}
    >
      <FileCopyOutlinedIcon />
    </button>
  )
  if (title) {
    return <Tooltip title={copied ? t('Copied') : title}>{b}</Tooltip>
  }
  return b
}

Copy.defaultProps = {
  title: null,
}

Copy.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  t: PropTypes.func.isRequired,
}

export default withTranslation()(Copy)
