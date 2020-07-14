import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import copy from "copy-to-clipboard";
import topStyle from "./index.scss";
const useStyles = makeStyles({
  tooltip: {
    fontSize: "0.8rem",
    textAlign: "center"
  }
});
type CopyProps = {
  text: string,
  title?: string,
  t: (...args: any[]) => any
};
const Copy: React.FC<CopyProps> = ({ text, title, t }) => {
  const [copied, setCopied] = useState(false);
  const classes = useStyles();
  const b = (
    <button
      type="button"
      className={`${topStyle.svgwrapper} ${topStyle.copy}`}
      onClick={() => {
        copy(text);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }}
    >
      <FileCopyOutlinedIcon />
    </button>
  );
  if (title) {
    return (
      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title={copied ? t("Copied") : title}
      >
        {b}
      </Tooltip>
    );
  }
  return b;
};
Copy.defaultProps = {
  title: null
};
export default withTranslation()(Copy);
