import React from 'react'
import PropTypes from 'prop-types'
import pageStyle from './index.scss'

const Page = ({ children, className }) => <div className={`${pageStyle.page} ${className}`}>{children}</div>

Page.defaultProps = {
  className: '',
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

export default Page
