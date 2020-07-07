import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import blockStyle from './index.scss'

const Block = ({ children, isTop, className }) => (
  <div
    className={`${cx({
      [blockStyle.block]: true,
      [blockStyle.topblock]: isTop,
    })} ${className}`}
  >
    {children}
  </div>
)

Block.defaultProps = {
  isTop: null,
  className: null,
}

Block.propTypes = {
  children: PropTypes.element.isRequired,
  isTop: PropTypes.bool,
  className: PropTypes.string,
}

export default Block
