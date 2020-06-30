import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfoLine from './InfoLine'

const Infos = ({
  adresse,
  tel,
  email,
  birthDate,
  birthPlace,
  websiteName,
  websiteUrl,
}) => (
  <div>
    <InfoLine type="adresse" text={adresse} />
    <InfoLine type="tel" text={tel} />
    <InfoLine type="email" text={email} />
    <InfoLine type="birth_date" text={birthDate} />
    {birthPlace && <InfoLine type="birth_place" text={birthPlace} />}
    {websiteName && websiteUrl && (
      <InfoLine type="website" text={websiteName} url={websiteUrl} />
    )}
  </div>
)

Infos.defaultProps = {
  birthPlace: null,
  websiteName: null,
  websiteUrl: null,
}

Infos.propTypes = {
  adresse: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  birthPlace: PropTypes.string,
  websiteName: PropTypes.string,
  websiteUrl: PropTypes.string,
}

const mapStateToProps = (state) => ({
  adresse: state.adresse,
  tel: state.tel,
  email: state.email,
  birthDate: state.birth_date,
  birthPlace: state.birth_place,
  websiteName: state.website_name,
  websiteUrl: state.website_url,
})

export default connect(mapStateToProps)(Infos)
