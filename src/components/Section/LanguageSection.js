import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Section from './index'
import LanguageBlock from '../Block/LanguageBlock'

const LanguageSection = ({ langList }) => (
  <Section title='Languages'>
    <LanguageBlock langList={langList} />
  </Section>
)

LanguageSection.propTypes = {
  langList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  langList: state.languages,
})

export default connect(mapStateToProps)(LanguageSection)
