import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import UIButton from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles({
  buttonLabel: {
    fontWeight: 'bold',
  },

  tooltip: {
    maxWidth: '8.5rem',
    fontSize: '0.8rem',
    textAlign: 'center',
  },
})

const Button = ({ text, onClick, color, title, disabled, component }) => {
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
      component={component}
    >
      {text}
    </UIButton>
  )

  if (title) {
    return (
      <Tooltip title={title} classes={{ tooltip: classes.tooltip }}>
        {uiButton}
      </Tooltip>
    )
  }
  return uiButton
}

Button.defaultProps = {
  onClick: null,
  color: 'primary',
  title: null,
  disabled: false,
  component: 'button',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  component: PropTypes.string,
}

export default Button
