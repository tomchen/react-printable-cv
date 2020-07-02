import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import sectionStyle from './index.scss'

const Section = ({ title, children }) => (
  <section className={sectionStyle.section}>
    {title && <SectionTitle title={title} />}
    {children}
  </section>
)

Section.defaultProps = {
  title: null,
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
}

export default Section
