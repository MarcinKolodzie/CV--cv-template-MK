import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Education = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography
        variant={'h2h'}
      >
        Education
      </Typography>
      <div
        {...otherProps}
      >
      </div>
    </div>
  )
}

Education.propTypes = {
  className: PropTypes.string
}

export default Education
