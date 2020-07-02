import React from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'
import buttonStyle from './index.scss'

const ButtonMenu = () => {
  const print = () => {
    window.print()
  }

  return (
    <div className={buttonStyle.menu}>
      <Button text="Print" onClick={print} />
    </div>
  )
}

// ButtonMenu.propTypes = {}

export default ButtonMenu
