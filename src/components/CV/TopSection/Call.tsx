import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import Tooltip from "@material-ui/core/Tooltip";
import topStyle from "./index.scss";
const useStyles = makeStyles({
  tooltip: {
    fontSize: "0.8rem",
    textAlign: "center"
  }
});
type CallProps = {
  tel: string,
  title?: string
};
const Call: React.FC<CallProps> = ({ tel, title }) => {
  const classes = useStyles();
  const b = (
    <button
      type="button"
      className={`${topStyle.svgwrapper} ${topStyle.call}`}
      onClick={() => {
        window.location.href = `tel:${tel}`;
      }}
    >
      <CallIcon />
    </button>
  );
  if (title) {
    return (
      <Tooltip classes={{ tooltip: classes.tooltip }} title={title}>
        {b}
      </Tooltip>
    );
  }
  return b;
};
Call.defaultProps = {
  title: null
};
export default Call;
