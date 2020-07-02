import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import blockStyle from './index.scss'

const Block = ({ children, isTop }) => (
  <div
    className={`${cx({
      [blockStyle.block]: true,
      [blockStyle.topblock]: isTop,
    })}`}
  >
    {children}
  </div>
)

Block.defaultProps = {
  isTop: null,
}

Block.propTypes = {
  children: PropTypes.element.isRequired,
  isTop: PropTypes.bool,
}

export default Block
