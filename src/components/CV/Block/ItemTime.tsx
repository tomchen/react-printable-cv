import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { autoDetectDmy } from "Src/utils/timeFormat";
import tbbStyle from "./TimeBasedBlock.scss";
type ItemTimeProps = {
  from: string,
  to?: string,
  currentLang: string,
  t: (...args: any[]) => any
};
const ItemTime: React.FC<ItemTimeProps> = ({ from, to, currentLang, t }) => {
  const fromLocale = autoDetectDmy(from, currentLang);
  const toLocale = autoDetectDmy(to, currentLang);
  return (
    <div className={tbbStyle.time}>
      {to
        ? t("{{from}} – {{to}}", {
            from: fromLocale,
            to: toLocale
          })
        : t("{{from}} – now", { from: fromLocale })}
    </div>
  );
};
ItemTime.defaultProps = {
  to: null
};
const mapStateToProps = state => ({
  currentLang: state.lang
});
export default connect(mapStateToProps)(withTranslation()(ItemTime));
