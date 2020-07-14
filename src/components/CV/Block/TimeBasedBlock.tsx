import React from "react";
import ItemTime from "./ItemTime";
import ItemContent from "./ItemContent";
import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import Block from "./index";
import tbbStyle from "./TimeBasedBlock.scss";
type TimeBasedBlockProps = {
  timeBasedItemList: any[]
};
const TimeBasedBlock: React.FC<TimeBasedBlockProps> = ({
  timeBasedItemList
}) => (
  <Block>
    <>
      {timeBasedItemList.map(item => (
        <div key={item.title} className={tbbStyle.item}>
          <ItemTime from={item.from} to={item.to} />
          <div className={tbbStyle.lines}>
            {item.title && <ItemTitle content={item.title} />}
            {item.subtitle && <ItemSubtitle content={item.subtitle} />}
            {item.content && <ItemContent content={item.content} />}
          </div>
        </div>
      ))}
    </>
  </Block>
);
export default TimeBasedBlock;
