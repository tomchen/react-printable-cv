import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import settings from 'Settings'
import Page from '../Page'
import WebVersionLink from './WebVersionLink'
import TopSection from './TopSection'
import CareerSection from './Section/CareerSection'
import EduSection from './Section/EduSection'
import LanguageSection from './Section/LanguageSection'
import Section from './Section'
import Block from './Block'
import Footer from './Footer'
import CVStyle from './index.scss'

const CV = ({ educationFirst, customSections, url }) => (
  <Page className={CVStyle.cv}>
    <>
      {settings.print_show_web_version_link && url && <WebVersionLink />}
      <TopSection />
      {educationFirst ? (
        <>
          <EduSection />
          <CareerSection />
        </>
      ) : (
        <>
          <CareerSection />
          <EduSection />
        </>
      )}
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

CV.propTypes = {
  educationFirst: PropTypes.bool,
  customSections: PropTypes.arrayOf(PropTypes.object),
  url: PropTypes.string,
}

const mapStateToProps = (state) => ({
  educationFirst: state.userData.education_first,
  customSections: state.userData.custom_sections,
  url: state.userData.web_version_url,
})

export default connect(mapStateToProps)(CV)
