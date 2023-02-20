import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Experience = (props) => {
  const {
    className,
    timeChildren,
    workChildren,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <timePeriode>
        {timeChildren}
      </timePeriode>
      <workData>
        {workChildren}
      </workData>
    </div>
  )
}

Experience.propTypes = {
  className: PropTypes.string,
  timeChildren: PropTypes.string,
  workChildren: PropTypes.string
}

export default Experience
