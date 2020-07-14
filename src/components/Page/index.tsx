import React from "react";
import pageStyle from "./index.scss";
type PageProps = {
  className?: string
};
const Page: React.FC<PageProps> = ({ children, className }) => (
  <div className={`${pageStyle.page} ${className}`}>{children}</div>
);
Page.defaultProps = {
  className: ""
};
export default Page;
