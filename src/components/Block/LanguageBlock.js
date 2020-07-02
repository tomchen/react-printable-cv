import React from 'react'
import PropTypes from 'prop-types'
import Block from './index'
import lbStyle from './LanguageBlock.scss'

const LanguageBlock = ({ langList }) => (
  <Block>
    <ul className={lbStyle.ul}>
      {langList.map((item) => (
        <li key={item.name}>
          <span className={lbStyle.langname}>{item.name}</span>
          <span className={lbStyle.langdesc}>{item.desc}</span>
        </li>
      ))}
    </ul>
  </Block>
)

LanguageBlock.propTypes = {
  langList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LanguageBlock
