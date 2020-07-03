import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Page from '.'
import TopSection from '../TopSection'
import CareerSection from '../Section/CareerSection'
import EduSection from '../Section/EduSection'
import LanguageSection from '../Section/LanguageSection'
import Section from '../Section'
import Block from '../Block'
import Footer from '../Footer'

const CVPage = ({ customSections }) => (
  <Page>
    <TopSection />
    <CareerSection />
    <EduSection />
    <LanguageSection />
    {customSections.map((item, index) => (
      <Section
        key={item.section_name}
        title={item.section_name}
        isBottom={index === customSections.length - 1 && true}
      >
        <Block>
          <>
          {item.section_content.split('\n').map((paragraph) => (
            <p key={uuidv4()}>{paragraph}</p>
          ))}
          </>
        </Block>
      </Section>
    ))}
    <Footer />
  </Page>
)

CVPage.propTypes = {
  customSections: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  customSections: state.userData.custom_sections,
})

export default connect(mapStateToProps)(CVPage)
