import React from "react";
import { withTranslation } from "react-i18next";
type DesignedByProps = {
  name: string,
  url?: string,
  t: (...args: any[]) => any
};
const DesignedBy: React.FC<DesignedByProps> = ({ name, url, t }) => (
  <div>
    {t("Designed by ")}
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}
    {t(".")}
  </div>
);
DesignedBy.defaultProps = {
  url: null
};
export default withTranslation()(DesignedBy);
