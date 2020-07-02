import React from 'react'
import PropTypes from 'prop-types'
import buttonStyle from './index.scss'

const Button = ({ text, onClick }) => (
  <button onClick={onClick} type="button" className={buttonStyle.button}>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
