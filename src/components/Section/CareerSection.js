import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import TimeBasedSection from './TimeBasedSection'

const careerListToTimeBasedItemList = (careerList) => {
  const newArr = []
  careerList.forEach((item) => {
    newArr.push({
      from: item.from_date,
      to: item.to_date,
      title: item.company,
      subtitle: item.title,
    })
  })
  return newArr
}

const CareerSection = ({ careerList, t }) =>
  careerList && (
    <TimeBasedSection
      title={t('Work Experience')}
      timeBasedItemList={careerListToTimeBasedItemList(careerList)}
    />
  )

CareerSection.defaultProps = {
  careerList: null,
}

CareerSection.propTypes = {
  careerList: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  careerList: state.userData.career,
})

export default connect(mapStateToProps)(withTranslation()(CareerSection))
