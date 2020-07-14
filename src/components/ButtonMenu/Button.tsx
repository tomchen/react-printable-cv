import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UIButton from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles({
  buttonLabel: {
    fontWeight: "bold"
  },
  tooltip: {
    maxWidth: "8.5rem",
    fontSize: "0.8rem",
    textAlign: "center"
  }
});
type ButtonProps = {
  text: string,
  onClick?: (...args: any[]) => any,
  color?: string,
  title?: string,
  disabled?: boolean,
  component?: string
};
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color,
  title,
  disabled,
  component
}) => {
  const classes = useStyles();
  const uiButton = (
    <UIButton
      classes={{
        label: classes.buttonLabel
      }}
      variant="contained"
      color={color}
      onClick={onClick}
      disabled={disabled}
      component={component}
    >
      {text}
    </UIButton>
  );
  if (title) {
    return (
      <Tooltip title={title} classes={{ tooltip: classes.tooltip }}>
        {uiButton}
      </Tooltip>
    );
  }
  return uiButton;
};
Button.defaultProps = {
  onClick: undefined,
  color: "primary",
  title: undefined,
  disabled: false,
  component: "button"
};
export default Button;
