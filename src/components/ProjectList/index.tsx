import React from "react";
import { connect } from "react-redux";
import Page from "../Page";
import Category from "./Category";
import projectListStyle from "./index.scss";
type ProjectListProps = {
  projectData?: {
    [key: string]: any
  }
};
const ProjectList: React.FC<ProjectListProps> = ({ projectData }) => (
  <Page className={projectListStyle.projectlist}>
    <div>
      <h2 className={projectListStyle.title}>{projectData.title}</h2>
      {projectData.categorys.map(categoryData => (
        <Category
          key={categoryData.name}
          name={categoryData.name}
          items={categoryData.items}
        />
      ))}
    </div>
  </Page>
);
ProjectList.defaultProps = {
  projectData: null
};
const mapStateToProps = state => ({
  projectData: state.projectData
});
export default connect(mapStateToProps)(ProjectList);
