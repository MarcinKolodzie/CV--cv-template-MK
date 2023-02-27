import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'
import LanguageLevel from '../LanguageLevel/LanguageLevel'

// import WebpackIcon from './WebpackIcon'
// import REACTIcon from './REACTIcon'

export const LanguagesItem = (props) => {
  const {
    className,
    text,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.textWrapper}
      >
        <Typography>
          {text}
        </Typography>
      </div>

      <div
        className={classes.languageLevelWrapper}
      >
        <LanguageLevel
          {...otherProps}
        />
      </div>

    </li>
  )
}

LanguagesItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default LanguagesItem
