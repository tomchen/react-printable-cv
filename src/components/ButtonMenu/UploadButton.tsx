import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { importJson } from "../../actions";
import Button from "./Button";
const useStyles = makeStyles(theme => ({
  root: {
    "> *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}));
type UploadButtonProps = {
  t: (...args: any[]) => any,
  dispatch: (...args: any[]) => any
};
const UploadButton: React.FC<UploadButtonProps> = ({ dispatch, t }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <label htmlFor="contained-button-file">
        <input
          accept="application/json"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={e => {
            const reader = new FileReader();
            reader.onload = evt => {
              dispatch(importJson(JSON.parse(evt.target.result)));
            };
            reader.readAsText(e.target.files[0]);
          }}
        />
        <Button
          text={t("Import JSON")}
          title={t("Import .json file and replace the data")}
          color="primary"
          component="span"
        />
      </label>
    </div>
  );
};
export default connect()(withTranslation()(UploadButton));
