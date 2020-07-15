import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import { autoDetectDmy } from '../../utils/timeFormat'
import Icon from './Icon'
import projectListStyle from './index.scss'
import stackIconList from './stackIcons'

const Item = ({
  name,
  url,
  urlTitle,
  gitUrl,
  githubUrl,
  npmUrl,
  date,
  stack,
  desc,
  currentLang,
  t,
}) => {
  const links =
    url || gitUrl || githubUrl || npmUrl ? (
      <span className={projectListStyle.links}>
        {url && (
          <Icon
            type="home"
            url={url}
            title={urlTitle || t('Home page')}
            size="large"
          />
        )}
        {gitUrl && <Icon type="git" url={gitUrl} title={t('git repository')} />}
        {githubUrl && (
          <Icon type="github" url={githubUrl} title={t('GitHub page')} />
        )}
        {npmUrl && (
          <Icon type="npm" url={npmUrl} title={t('npm package page')} />
        )}
      </span>
    ) : null

  let dateLine
  if (!date) {
    dateLine = ''
  } else if (typeof date === 'string') {
    dateLine = autoDetectDmy(date, currentLang)
  } else if (Array.isArray(date) && (date.length === 1 || date[1] === '')) {
    dateLine = t('{{from}} – now', {
      from: autoDetectDmy(date[0], currentLang),
    })
  } else {
    dateLine = t('{{from}} – {{to}}', {
      from: autoDetectDmy(date[0], currentLang),
      to: autoDetectDmy(date[1], currentLang),
    })
  }
  dateLine = <span className={projectListStyle.date}>{dateLine}</span>

  return (
    <div className={projectListStyle.item}>
      <h4 className={projectListStyle.itemtitle}>{name}</h4>
      {links}
      {dateLine}
      {stack && (
        <div className={projectListStyle.stack}>
          {stack.map((tech) => (
            <Icon
              key={tech}
              type={tech}
              title={
                (
                  stackIconList[tech.toLowerCase()] || {
                    name: t('Warning: Can\'t find icon for "{{tech}}"', {
                      tech,
                    }),
                  }
                ).name
              }
              size="middle"
            />
          ))}
        </div>
      )}
      {desc && (
        <div className={projectListStyle.desc}>
          <Markdown source={desc} />
        </div>
      )}
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  urlTitle: PropTypes.string,
  gitUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  npmUrl: PropTypes.string,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  stack: PropTypes.arrayOf(PropTypes.string),
  desc: PropTypes.string,
  currentLang: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentLang: state.lang,
})

export default connect(mapStateToProps)(withTranslation()(Item))
