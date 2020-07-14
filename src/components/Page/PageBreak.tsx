import React from "react";
import pageStyle from "./index.scss";
type PageBreakProps = {
  className?: string
};
const PageBreak: React.FC<PageBreakProps> = ({ children, className }) => (
  <div className={`${pageStyle.pagebreak} ${className}`}>{children}</div>
);
PageBreak.defaultProps = {
  className: ""
};
export default PageBreak;
