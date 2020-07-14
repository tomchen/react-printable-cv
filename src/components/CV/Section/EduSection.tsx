import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import TimeBasedSection from "./TimeBasedSection";
const eduListToTimeBasedItemList = eduList => {
  const newArr = [];
  eduList.forEach(item => {
    newArr.push({
      from: item.from_date,
      to: item.to_date,
      title: item.school,
      subtitle: item.major,
      content: item.desc
    });
  });
  return newArr;
};
type EduSectionProps = {
  eduList: any[],
  t: (...args: any[]) => any
};
const EduSection: React.FC<EduSectionProps> = ({ eduList, t }) => (
  <TimeBasedSection
    title={t("Education")}
    timeBasedItemList={eduListToTimeBasedItemList(eduList)}
  />
);
const mapStateToProps = state => ({
  eduList: state.userData.education
});
export default connect(mapStateToProps)(withTranslation()(EduSection));
