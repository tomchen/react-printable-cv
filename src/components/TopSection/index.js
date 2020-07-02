import React from 'react'
import Photo from './Photo'
import Name from './Name'
import Infos from './Infos'
import Profession from './Profession'
import Block from '../Block'
import Section from '../Section'

const TopSection = () => (
  <Section>
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
