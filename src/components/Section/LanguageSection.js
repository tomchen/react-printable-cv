import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import Section from './index'
import LanguageBlock from '../Block/LanguageBlock'

const LanguageSection = ({ langList, t }) => (
  <Section title={t('Languages')}>
    <LanguageBlock langList={langList} />
  </Section>
)

LanguageSection.propTypes = {
  langList: PropTypes.arrayOf(PropTypes.object).isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  langList: state.userData.languages,
})

export default connect(mapStateToProps)(withTranslation()(LanguageSection))
