import React from 'react'
import PropTypes from 'prop-types'
import Block from './index'

const LanguageBlock = ({ langList }) => (
  <Block>
    {langList.map((item) => (
      <li key={item.name}>
        <span>{item.name}</span>
        <span>{item.desc}</span>
      </li>
    ))}
  </Block>
)

LanguageBlock.propTypes = {
  langList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LanguageBlock
