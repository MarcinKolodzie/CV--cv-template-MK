import React from 'react'
import PropTypes from 'prop-types'
import TimeOfWork from '../TimeOfWork'
import WorkData from '../WorkData'

import classes from './styles.module.css'

export const Experience = (props) => {
  const {
    className,
    startData,
    endData,
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
      <TimeOfWork
        startData={startData}
        endData={endData}
      />
      <WorkData
        position={position}
        employer={employer}
        place={place}
      />
    </div>
  )
}

Experience.propTypes = {
  className: PropTypes.string,
  startData: PropTypes.string,
  endData: PropTypes.string,
  position: PropTypes.string,
  employer: PropTypes.string,
  place: PropTypes.string
}

export default Experience
