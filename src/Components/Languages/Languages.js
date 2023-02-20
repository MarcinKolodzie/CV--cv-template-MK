import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Languages = (props) => {
  const {
    className,
    language1,
    language2,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography >
        {language1}
      </Typography>
      <Typography >
        {language2}
      </Typography>
    </div>
  )
}

Languages.propTypes = {
  className: PropTypes.string,
  language1: PropTypes.string,
  language2: PropTypes.string
}

export default Languages
