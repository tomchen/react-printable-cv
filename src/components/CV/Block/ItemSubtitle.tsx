import React from "react";
import tbbStyle from "./TimeBasedBlock.scss";
type ItemSubtitleProps = {
  content: string
};
const ItemSubtitle: React.FC<ItemSubtitleProps> = ({ content }) => (
  <div className={tbbStyle.subtitle}>{content}</div>
);
export default ItemSubtitle;
