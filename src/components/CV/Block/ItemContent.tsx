import React from "react";
import Markdown from "react-markdown";
import tbbStyle from "./TimeBasedBlock.scss";
type ItemContentProps = {
  content: string
};
const ItemContent: React.FC<ItemContentProps> = ({ content }) => (
  <div className={tbbStyle.content}>
    <Markdown source={content} />
  </div>
);
export default ItemContent;
