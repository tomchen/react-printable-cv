import React from 'react'
import PropTypes from 'prop-types'
import pageStyle from './index.scss'

const PageBreak = ({ children, className }) => <div className={`${pageStyle.pagebreak} ${className}`}>{children}</div>

PageBreak.defaultProps = {
  className: '',
}

PageBreak.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

export default PageBreak
