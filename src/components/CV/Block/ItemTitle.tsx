import React from "react";
import tbbStyle from "./TimeBasedBlock.scss";
type ItemTitleProps = {
  content: string
};
const ItemTitle: React.FC<ItemTitleProps> = ({ content }) => (
  <div className={tbbStyle.title}>{content}</div>
);
export default ItemTitle;
