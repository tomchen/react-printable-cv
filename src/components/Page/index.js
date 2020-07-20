import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import pageStyle from './index.scss'

const Page = ({ children, className }) => (
  <div
    className={cx({
      [pageStyle.page]: true,
      [className]: className,
    })}
  >
    {children}
  </div>
)

Page.defaultProps = {
  className: '',
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

export default Page
