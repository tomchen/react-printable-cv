import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
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

const EduSection = ({ eduList, t }) => (
  <TimeBasedSection
    title={t('Education')}
    timeBasedItemList={eduListToTimeBasedItemList(eduList)}
  />
)

EduSection.propTypes = {
  eduList: PropTypes.arrayOf(PropTypes.object).isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  eduList: state.userData.education,
})

export default connect(mapStateToProps)(withTranslation()(EduSection))
