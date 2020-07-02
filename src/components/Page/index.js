import React from 'react'
import PropTypes from 'prop-types'
import pageStyle from './index.scss'

const Page = ({ children }) => <div className={pageStyle.page}>{children}</div>

Page.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  ).isRequired,
}

export default Page
