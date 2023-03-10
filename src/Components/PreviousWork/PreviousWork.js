import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const PreviousWork = (props) => {
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
        Experience
      </Typography>
      <div
        {...otherProps}
      >
      </div>
    </div>
  )
}

PreviousWork.propTypes = {
  className: PropTypes.string
}

export default PreviousWork
