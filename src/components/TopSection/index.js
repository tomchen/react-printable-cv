import React from 'react'
import Photo from './Photo'
import Name from './Name'
import Infos from './Infos'
import Profession from './Profession'
import Block from '../Block'
import Section from '../Section'
import topsection from './index.scss'

const TopSection = () => (
  <Section className={topsection.topsection}>
    <>
      <Photo />
      <Block isTop>
        <>
          <Name />
          <Infos />
          <Profession />
        </>
      </Block>
    </>
  </Section>
)

export default TopSection
