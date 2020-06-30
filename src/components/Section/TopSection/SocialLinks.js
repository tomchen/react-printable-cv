import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SocialLink from './SocialLink'

const SocialLinks = ({ socialNetworks }) => (
  <div>
    {socialNetworks.map((item) => (
      <SocialLink
        key={item.type}
        type={item.type}
        id={item.id}
        url={item.url}
      />
    ))}
  </div>
)

SocialLinks.propTypes = {
  socialNetworks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  socialNetworks: state.social_networks,
})

export default connect(mapStateToProps)(SocialLinks)
