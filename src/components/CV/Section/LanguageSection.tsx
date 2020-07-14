import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import Section from "./index";
import LanguageBlock from "../Block/LanguageBlock";
type LanguageSectionProps = {
  langList: any[],
  t: (...args: any[]) => any
};
const LanguageSection: React.FC<LanguageSectionProps> = ({ langList, t }) => (
  <Section title={t("Languages")}>
    <LanguageBlock langList={langList} />
  </Section>
);
const mapStateToProps = state => ({
  langList: state.userData.languages
});
export default connect(mapStateToProps)(withTranslation()(LanguageSection));
