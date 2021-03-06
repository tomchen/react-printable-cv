import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Page from '../Page'
import Category from './Category'
import projectListStyle from './index.scss'

const ProjectList = ({ projectData }) => (
  <Page className={projectListStyle.projectlist}>
    <div>
      <h2 className={projectListStyle.title}>{projectData.title}</h2>
      {projectData.categorys.map((categoryData) => (
        <Category
          key={categoryData.name}
          name={categoryData.name}
          items={categoryData.items}
        />
      ))}
    </div>
  </Page>
)

ProjectList.propTypes = {
  projectData: PropTypes.objectOf(PropTypes.any)
}

const mapStateToProps = (state) => ({
  projectData: state.projectData,
})

export default connect(mapStateToProps)(ProjectList)
