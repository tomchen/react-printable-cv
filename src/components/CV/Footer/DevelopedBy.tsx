import React from "react";
import { withTranslation } from "react-i18next";
type DevelopedByProps = {
  name: string,
  url?: string,
  repoName?: string,
  gitUrl?: string,
  t: (...args: any[]) => any
};
const DevelopedBy: React.FC<DevelopedByProps> = ({
  name,
  url,
  repoName,
  gitUrl,
  t
}) => (
  <div>
    {t("Developed by ")}
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}
    {t(" with React")}
    {gitUrl && (
      <>
        {" "}
        (
        <a href={gitUrl} target="_blank" rel="noopener noreferrer">
          {repoName || t("repo")}
        </a>
        )
      </>
    )}
    {t(".")}
  </div>
);
DevelopedBy.defaultProps = {
  url: null,
  repoName: null,
  gitUrl: null
};
export default withTranslation()(DevelopedBy);
