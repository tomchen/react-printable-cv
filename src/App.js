import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TopSection from './components/Section/TopSection'
import CareerSection from './components/Section/CareerSection'
import EduSection from './components/Section/EduSection'
import LanguageSection from './components/Section/LanguageSection'
import Section from './components/Section'
import Footer from './components/Footer'
import './reset.css'

const App = ({ customSections }) => (
  <div>
    <TopSection />
    <CareerSection />
    <EduSection />
    <LanguageSection />
    {customSections.map((item) => (
      <Section key={item.section_name} title={item.section_name}>
        <div>{item.section_content}</div>
      </Section>
    ))}
    <Footer />
  </div>
)

App.propTypes = {
  customSections: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  customSections: state.custom_sections,
})

export default connect(mapStateToProps)(App)
