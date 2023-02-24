import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

import classes from './styles.module.css'

export const WorkData = (props) => {
  const {
    className,
    position,
    employer,
    place,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div>
        <Typography
          variant={'h2work'}
        >
          {position}
        </Typography>
      </div>
      <div>
        <Typography
          variant={'h3work'}
        >
          {employer}
        </Typography>
      </div>
      <div>
        <Typography
          variant={'h4work'}
        >
          {place}
        </Typography>
      </div>
    </div>
  )
}

WorkData.propTypes = {
  className: PropTypes.string,
  position: PropTypes.string,
  employer: PropTypes.string,
  place: PropTypes.string
}

export default WorkData
