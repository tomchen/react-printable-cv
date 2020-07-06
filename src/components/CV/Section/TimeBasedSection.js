import React from 'react'
import PropTypes from 'prop-types'
import Section from './index'
import TimeBasedBlock from '../Block/TimeBasedBlock'

const TimeBasedSection = ({ title, timeBasedItemList }) => (
  <Section title={title}>
    <TimeBasedBlock timeBasedItemList={timeBasedItemList} />
  </Section>
)

TimeBasedSection.propTypes = {
  title: PropTypes.string.isRequired,
  timeBasedItemList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TimeBasedSection
