import React from "react";
import cx from "classnames";
import blockStyle from "./index.scss";
type BlockProps = {
  isTop?: boolean,
  className?: string
};
const Block: React.FC<BlockProps> = ({ children, isTop, className }) => (
  <div
    className={`${cx({
      [blockStyle.block]: true,
      [blockStyle.topblock]: isTop
    })} ${className}`}
  >
    {children}
  </div>
);
Block.defaultProps = {
  isTop: null,
  className: null
};
export default Block;
