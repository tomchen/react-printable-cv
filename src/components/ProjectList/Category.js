import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import ProjectListStyle from './index.scss'

const Category = ({ name, items }) => (
  <div className={ProjectListStyle.cat}>
    <h3 className={ProjectListStyle.cattitle}>{name}</h3>
    <div>
      {items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          url={item.url}
          gitUrl={item.git_url}
          githubUrl={item.github_url}
          npmUrl={item.npm_url}
          date={item.date}
          stack={item.stack}
          desc={item.desc}
        />
      ))}
    </div>
  </div>
)

Category.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default Category
