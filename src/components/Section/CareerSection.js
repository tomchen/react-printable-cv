import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TimeBasedSection from './TimeBasedSection'

const careerListToTimeBasedItemList = (careerList) => {
  const newArr = []
  careerList.forEach((item) => {
    newArr.push({
      from: item.from_date,
      to: item.to_date,
      title: item.company,
      subtitle: item.title
    })
  })
  return newArr
}

const CareerSection = ({ careerList }) => (
  <TimeBasedSection title="Work Experience" timeBasedItemList={careerListToTimeBasedItemList(careerList)} />
)

CareerSection.propTypes = {
  careerList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  careerList: state.career,
})

export default connect(mapStateToProps)(CareerSection)
