import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from './Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '> *': {
      margin: theme.spacing(1),
    },
  },

  input: {
    display: 'none',
  },
}))

const UploadButton = ({ text, onChange, color, title, disabled, component }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <label htmlFor="contained-button-file">
        <input
          accept="application/json"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={onChange}
        />
        <Button
          text={text}
          title={title}
          color={color}
          disabled={disabled}
          component={component}
        />
      </label>
    </div>
  )
}

UploadButton.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  component: PropTypes.string,
}

export default UploadButton
