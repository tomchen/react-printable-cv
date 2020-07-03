import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles({
  root: {
    marginRight: 0,
  },
  
  label: {
    textAlign: 'center',
  },
})

const SwitchBar = ({ text, onChange, color }) => {
  const [state, setState] = React.useState({
    checkedB: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    onChange(event.target.checked)
  }

  const classes = useStyles()
  return (
    <FormControlLabel
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      control={
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
          color={color}
        />
      }
      labelPlacement="end"
      label={text}
    />
  )
}

SwitchBar.defaultProps = {
  color: 'primary',
}

SwitchBar.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
}

export default SwitchBar
