import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import photoImage from '../../../../data/photo.jpg'

const Photo = ({ name }) => (
  <div>
    <img src={photoImage} alt={name} />
  </div>
)

Photo.propTypes = {
  name: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  name: state.name,
})

export default connect(mapStateToProps)(Photo)
