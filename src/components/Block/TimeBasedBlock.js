import React from 'react'
import PropTypes from 'prop-types'
import ItemTime from './ItemTime'
import ItemContent from './ItemContent'
import ItemTitle from './ItemTitle'
import ItemSubtitle from './ItemSubtitle'
import Block from './index'

const TimeBasedBlock = ({ timeBasedItemList }) => (
  <Block>
    {timeBasedItemList.map((item) => (
      <div key={item.title}>
        <ItemTime from={item.from} to={item.to} />
        <ItemTitle content={item.title} />
        {item.subtitle && <ItemSubtitle content={item.subtitle} />}
        {item.content && <ItemContent content={item.content} />}
      </div>
    ))}
  </Block>
)

TimeBasedBlock.propTypes = {
  timeBasedItemList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TimeBasedBlock
