import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import Page from '../Page'
import TopSection from './TopSection'
import CareerSection from './Section/CareerSection'
import EduSection from './Section/EduSection'
import LanguageSection from './Section/LanguageSection'
import Section from './Section'
import Block from './Block'
import Footer from './Footer'
import CVStyle from './index.scss'

const CV = ({ customSections }) => (
  <Page className={CVStyle.cv}>
    <>
      <TopSection />
      <CareerSection />
      <EduSection />
      <LanguageSection />
      {customSections &&
        customSections.map((item, index) => (
          <Section
            key={item.section_name}
            title={item.section_name}
            isBottom={index === customSections.length - 1 && true}
          >
            <Block>
              <Markdown source={item.section_content} />
            </Block>
          </Section>
        ))}
      <Footer />
    </>
  </Page>
)

CV.defaultProps = {
  customSections: null,
}

CV.propTypes = {
  customSections: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state) => ({
  customSections: state.userData.custom_sections,
})

export default connect(mapStateToProps)(CV)
