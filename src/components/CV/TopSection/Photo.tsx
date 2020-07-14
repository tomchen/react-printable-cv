import React from "react";
import { connect } from "react-redux";
import photoStyle from "./Photo.scss";
import photoImage from "../../../../data/photo.jpg";
type PhotoProps = {
  name: string
};
const Photo: React.FC<PhotoProps> = ({ name }) => (
  <div className={photoStyle.photo}>
    <img src={photoImage} alt={name} />
  </div>
);
const mapStateToProps = state => ({
  name: state.userData.name
});
export default connect(mapStateToProps)(Photo);
