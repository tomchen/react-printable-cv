import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SectionTitle from './SectionTitle'
import sectionStyle from './index.scss'

const Section = ({ title, children, className }) => (
  <section
    className={cx({
      [sectionStyle.section]: true,
      [className]: className,
    })}
  >
    {title && <SectionTitle title={title} />}
    {children}
  </section>
)

Section.defaultProps = {
  className: '',
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

export default Section
