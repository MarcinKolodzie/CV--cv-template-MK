import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Skills = (props) => {
  const {
    className,
    children,
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
        Skills
      </Typography>
      {children}
    </div>
  )
}

Skills.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Skills
