import React from "react";
import { connect } from "react-redux";
import topStyle from "./index.scss";
type ProfessionProps = {
  profession: string
};
const Profession: React.FC<ProfessionProps> = ({ profession }) => (
  <div className={topStyle.profession}>{profession}</div>
);
const mapStateToProps = state => ({
  profession: state.userData.profession
});
export default connect(mapStateToProps)(Profession);
