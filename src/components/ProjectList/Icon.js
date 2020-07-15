import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import HomeIcon from '@material-ui/icons/Home'
import WarningIcon from '@material-ui/icons/Warning'
import projectListStyle from './index.scss'
import stackIconList from './stackIcons'

const useStyles = makeStyles({
  tooltip: {
    fontSize: '0.8rem',
    textAlign: 'center',
  },
})

const iconList = {
  home: {
    name: 'Home',
    icon: HomeIcon,
    color: '#008c38',
  },
  warning: {
    name: 'Warning',
    icon: WarningIcon,
    color: 'red',
  },
  ...stackIconList,
}

const Icon = ({ type, url, title, size }) => {
  let realSize
  switch (size) {
    case 'small':
      realSize = 18
      break
    case 'middle':
      realSize = 25
      break
    case 'large':
      realSize = 32
      break
    default:
      realSize = size
  }

  const classes = useStyles()

  let typeLower = type.toLowerCase()
  typeLower = typeLower in iconList ? typeLower : 'warning'

  const style = {
    width: realSize,
    height: realSize,
  }
  const TypeIcon = iconList[typeLower].icon
  const TypeIconRendered = (
    <TypeIcon
      style={{
        ...style,
        fontSize: realSize,
        color: iconList[typeLower].color,
      }}
    />
  )

  const anchor = url ? (
    <a
      href={url}
      className={projectListStyle.svgwrapper}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      {TypeIconRendered}
    </a>
  ) : (
    <span className={projectListStyle.svgwrapper} style={style}>
      {TypeIconRendered}
    </span>
  )
  if (title) {
    return (
      <Tooltip classes={{ tooltip: classes.tooltip }} title={title}>
        {anchor}
      </Tooltip>
    )
  }
  return anchor
}

Icon.defaultProps = {
  size: 'middle',
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Icon
