import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Courses = (props) => {
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
        variant={'h2'}
      >
        Courses
      </Typography>
      <div
        {...otherProps}
      >
      </div>
    </div>
  )
}

Courses.propTypes = {
  className: PropTypes.string
}

export default Courses
