import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import photoStyle from './Photo.scss'
import photoImage from '../../../../data/photo.jpg'

const Photo = ({ name }) => (
  <div className={photoStyle.photo}>
    <img src={photoImage} alt={name} />
  </div>
)

Photo.propTypes = {
  name: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  name: state.userData.name,
})

export default connect(mapStateToProps)(Photo)
