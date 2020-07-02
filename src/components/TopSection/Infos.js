import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfoLine from './InfoLine'
import topStyle from './index.scss'

const Infos = ({
  adresse,
  tel,
  email,
  birthDate,
  birthPlace,
  websiteName,
  websiteUrl,
  socialNetworks,
}) => (
  <div className={topStyle.infos}>
    <InfoLine type="adresse" text={adresse} />
    <InfoLine type="tel" text={tel} />
    <InfoLine type="email" text={email} url={`mailto:${email}`} isNotExtUrl/>
    <InfoLine type="birth_date" text={birthDate} />
    {birthPlace && <InfoLine type="birth_place" text={birthPlace} />}
    {websiteName && websiteUrl && (
      <InfoLine type="website" text={websiteName} url={websiteUrl} />
    )}
    {socialNetworks.map((item) => (
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
  birthPlace: null,
  websiteName: null,
  websiteUrl: null,
  socialNetworks: null,
}

Infos.propTypes = {
  adresse: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  birthPlace: PropTypes.string,
  websiteName: PropTypes.string,
  websiteUrl: PropTypes.string,
  socialNetworks: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state) => ({
  adresse: state.adresse,
  tel: state.tel,
  email: state.email,
  birthDate: state.birth_date,
  birthPlace: state.birth_place,
  websiteName: state.website_name,
  websiteUrl: state.website_url,
  socialNetworks: state.social_networks,
})

export default connect(mapStateToProps)(Infos)
