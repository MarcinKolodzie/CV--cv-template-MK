import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

import classes from './styles.module.css'

export const TimeOfWork = (props) => {
  const {
    className,
    startData,
    endData,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div>
        <Typography
          variant={'h3work'}
        >
          {startData}
        </Typography>
      </div>
      <div>
        <Typography
          variant={'h3work'}
        >
          - {endData}
        </Typography>
      </div>
    </div>
  )
}

TimeOfWork.propTypes = {
  className: PropTypes.string,
  startData: PropTypes.string,
  endData: PropTypes.string
}

export default TimeOfWork
