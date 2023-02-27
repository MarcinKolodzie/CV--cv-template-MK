import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import PinkDotIcon from './PinkDotIcon'
import GreyDotIcon from './GreyDotIcon '

export const LanguageLevel = (props) => {
  const {
    className,
    level,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {
        level >= 1 ?
          <PinkDotIcon />
          :
          <GreyDotIcon />
          }
      {
        level >= 2 ?
          <PinkDotIcon />
          :
          <GreyDotIcon />
          }
      {
        level >= 3 ?
          <PinkDotIcon />
          :
          <GreyDotIcon />
          }
      {
        level >= 4 ?
          <PinkDotIcon />
          :
          <GreyDotIcon />
          }
      {
        level === 5 ?
          <PinkDotIcon />
          :
          <GreyDotIcon />
          }
    </div>

  )
}

LanguageLevel.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number
}

export default LanguageLevel
