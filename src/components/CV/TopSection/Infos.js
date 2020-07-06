import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfoLine from './InfoLine'
import topStyle from './index.scss'

const Infos = ({
  address,
  tel,
  email,
  birthDate,
  birthPlace,
  websiteName,
  websiteUrl,
  socialNetworks,
}) => (
  <div className={topStyle.infos}>
    {address && <InfoLine type="address" text={address} />}
    {tel && <InfoLine type="tel" text={tel} />}
    {email && <InfoLine type="email" text={email} url={`mailto:${email}`} isNotExtUrl/>}
    {birthDate && <InfoLine type="birth_date" text={birthDate} />}
    {birthPlace && <InfoLine type="birth_place" text={birthPlace} />}
    {websiteName && websiteUrl && (
      <InfoLine type="website" text={websiteName} url={websiteUrl} />
    )}
    {socialNetworks && socialNetworks.map((item) => (
      <InfoLine
        key={item.type}
        type={item.type}
        text={item.id}
        url={item.url}
        isSocial
      />
    ))}
  </div>
)

Infos.defaultProps = {
  address: null,
  tel: null,
  email: null,
  birthDate: null,
  birthPlace: null,
  websiteName: null,
  websiteUrl: null,
  socialNetworks: null,
}

Infos.propTypes = {
  address: PropTypes.string,
  tel: PropTypes.string,
  email: PropTypes.string,
  birthDate: PropTypes.string,
  birthPlace: PropTypes.string,
  websiteName: PropTypes.string,
  websiteUrl: PropTypes.string,
  socialNetworks: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state) => ({
  address: state.userData.address,
  tel: state.userData.tel,
  email: state.userData.email,
  birthDate: state.userData.birth_date,
  birthPlace: state.userData.birth_place,
  websiteName: state.userData.website_name,
  websiteUrl: state.userData.website_url,
  socialNetworks: state.userData.social_networks,
})

export default connect(mapStateToProps)(Infos)
