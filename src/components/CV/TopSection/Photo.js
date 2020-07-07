import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import photoStyle from './Photo.scss'
/// #if USEDUMMY
import photoImage from '../../../../data/dummy/photo.jpg'
/// #else
import photoImage from '../../../../data/photo.jpg'
/// #endif

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
