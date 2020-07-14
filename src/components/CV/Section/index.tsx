import React from "react";
import SectionTitle from "./SectionTitle";
import sectionStyle from "./index.scss";
type SectionProps = {
  title?: string,
  className?: string
};
const Section: React.FC<SectionProps> = ({ title, children, className }) => (
  <section className={`${sectionStyle.section} ${className}`}>
    {title && <SectionTitle title={title} />}
    {children}
  </section>
);
Section.defaultProps = {
  title: undefined,
  className: ""
};
export default Section;
