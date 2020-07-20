import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import pageStyle from './index.scss'

const PageBreak = ({ children, className }) => (
  <div
    className={cx({
      [pageStyle.pagebreak]: true,
      [className]: className,
    })}
  >
    {children}
  </div>
)

PageBreak.defaultProps = {
  className: '',
}

PageBreak.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

export default PageBreak
