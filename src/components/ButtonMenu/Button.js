import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import UIButton from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles({
  buttonLabel: {
    fontWeight: 'bold',
  },

  tooltipWidth: {
    maxWidth: 100,
    textAlign: 'center',
  },
})

const Button = ({ text, onClick, color, title, disabled }) => {
  const classes = useStyles()
  const uiButton = (
    <UIButton
      classes={{
        label: classes.buttonLabel,
      }}
      variant="contained"
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </UIButton>
  )

  if (title) {
    return (
      <Tooltip title={title} classes={{ tooltip: classes.tooltipWidth }}>
        {uiButton}
      </Tooltip>
    )
  }
  return uiButton
}

Button.defaultProps = {
  color: 'primary',
  title: null,
  disabled: false,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Button
