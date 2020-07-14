import React from "react";
import Section from "./index";
import TimeBasedBlock from "../Block/TimeBasedBlock";
type TimeBasedSectionProps = {
  title: string,
  timeBasedItemList: any[]
};
const TimeBasedSection: React.FC<TimeBasedSectionProps> = ({
  title,
  timeBasedItemList
}) => (
  <Section title={title}>
    <TimeBasedBlock timeBasedItemList={timeBasedItemList} />
  </Section>
);
export default TimeBasedSection;
