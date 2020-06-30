import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TimeBasedSection from './TimeBasedSection'

const eduListToTimeBasedItemList = (eduList) => {
  const newArr = []
  eduList.forEach((item) => {
    newArr.push({
      from: item.from_date,
      to: item.to_date,
      title: item.school,
      subtitle: item.major,
      content: item.desc,
    })
  })
  return newArr
}

const EduSection = ({ eduList }) => (
  <TimeBasedSection
    title='Education'
    timeBasedItemList={eduListToTimeBasedItemList(eduList)}
  />
)

EduSection.propTypes = {
  eduList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  eduList: state.education,
})

export default connect(mapStateToProps)(EduSection)
