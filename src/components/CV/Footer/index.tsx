import React from "react";
import { connect } from "react-redux";
import DesignedBy from "./DesignedBy";
import DevelopedBy from "./DevelopedBy";
import LastUpdate from "./LastUpdate";
import footerStyle from "./index.scss";
type FooterProps = {
  design?: {
    [key: string]: string
  },
  develop?: {
    [key: string]: string
  },
  lastUpdateTime?: string
};
const Footer: React.FC<FooterProps> = ({
  design,
  develop,
  lastUpdateTime
}) => {
  return (
    <footer className={footerStyle.footer}>
      {develop && (
        <DevelopedBy
          name={develop.name}
          url={develop.url}
          repoName={develop.repo_name}
          gitUrl={develop.repo_url}
        />
      )}
      {design && <DesignedBy name={design.name} url={design.url} />}
      {lastUpdateTime && <LastUpdate time={lastUpdateTime} />}
    </footer>
  );
};
Footer.defaultProps = {
  design: null,
  develop: null,
  lastUpdateTime: null
};
const mapStateToProps = state => ({
  design: state.userData.designed_by,
  develop: state.userData.developed_by,
  lastUpdateTime: state.userData.last_update
});
export default connect(mapStateToProps)(Footer);
