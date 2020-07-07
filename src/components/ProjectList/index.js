import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Page from '../Page'
import Category from './Category'
import projectListStyle from './index.scss'

const ProjectList = ({ projectData }) => (
  <>
    <Page className={projectListStyle.projectlist}>
      <>
        <h2 className={projectListStyle.title}>{projectData.title}</h2>

        {/* {projectData.categorys.map((categoryData) => (
        <Category
          key={categoryData.name}
          name={categoryData.name}
          items={categoryData.items}
        />
      ))} */}
        <Category
          key={projectData.categorys[0].name}
          name={projectData.categorys[0].name}
          items={projectData.categorys[0].items}
        />
        <Category
          key={projectData.categorys[1].name}
          name={projectData.categorys[1].name}
          items={projectData.categorys[1].items}
        />
      </>
    </Page>
    <Page className={projectListStyle.projectlist}>
      <Category
        key={projectData.categorys[2].name}
        name={projectData.categorys[2].name}
        items={projectData.categorys[2].items}
      />
    </Page>
  </>
)

ProjectList.defaultProps = {
  projectData: null,
}

ProjectList.propTypes = {
  projectData: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.object),
    ]),
  ),
}

const mapStateToProps = (state) => ({
  projectData: state.projectData,
})

export default connect(mapStateToProps)(ProjectList)
