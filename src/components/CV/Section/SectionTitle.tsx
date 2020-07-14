import React from "react";
import sectionTitleStyle from "./SectionTitle.scss";
type SectionTitleProps = {
  title: string
};
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <h2 className={sectionTitleStyle.title}>{title}</h2>
);
export default SectionTitle;
