import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { autoDetectDmy } from "../../../utils/timeFormat";
type LastUpdateProps = {
  time: string,
  t: (...args: any[]) => any,
  i18n: {
    [key: string]: any
  }
};
const LastUpdate: React.FC<LastUpdateProps> = ({ time, t, i18n }) => {
  return (
    <div>
      {t("Last update: ")}
      {autoDetectDmy(time, i18n.language)}
    </div>
  );
};
export default connect()(withTranslation()(LastUpdate));
