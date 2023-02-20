import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Skills = (props) => {
  const {
    className,
    skills,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
    skill8,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography >
        {skill1}
      </Typography>
      <Typography >
        {skill2}
      </Typography>
      <Typography >
        {skill3}
      </Typography>
      <Typography >
        {skill4}
      </Typography>
      <Typography >
        {skill5}
      </Typography>
      <Typography >
        {skill6}
      </Typography>
      <Typography >
        {skill7}
      </Typography>
      <Typography >
        {skill8}
      </Typography>
    </div>
  )
}

Skills.propTypes = {
  className: PropTypes.string,
  skills: PropTypes.array,
  skill1: PropTypes.string,
  skill2: PropTypes.string,
  skill3: PropTypes.string,
  skill4: PropTypes.string,
  skill5: PropTypes.string,
  skill6: PropTypes.string,
  skill7: PropTypes.string,
  skill8: PropTypes.string
}

export default Skills
