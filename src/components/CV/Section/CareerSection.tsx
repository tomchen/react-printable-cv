import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import TimeBasedSection from "./TimeBasedSection";
const careerListToTimeBasedItemList = careerList => {
  const newArr = [];
  careerList.forEach(item => {
    newArr.push({
      from: item.from_date,
      to: item.to_date,
      title: item.company,
      subtitle: item.title
    });
  });
  return newArr;
};
type CareerSectionProps = {
  careerList?: any[],
  t: (...args: any[]) => any
};
const CareerSection: React.FC<CareerSectionProps> = ({ careerList, t }) =>
  careerList && (
    <TimeBasedSection
      title={t("Work Experience")}
      timeBasedItemList={careerListToTimeBasedItemList(careerList)}
    />
  );
CareerSection.defaultProps = {
  careerList: null
};
const mapStateToProps = state => ({
  careerList: state.userData.career
});
export default connect(mapStateToProps)(withTranslation()(CareerSection));
