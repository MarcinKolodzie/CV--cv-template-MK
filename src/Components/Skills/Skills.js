import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Skills = (props) => {
  const {
    className,
    skills,
    skill,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {skills.map((skill, i) => {
        return (
          <li
            key={skills.id}
          >
            <Typography >
              {skill[i]}
            </Typography>
          </li>
        )
      }
      )}
    </div>
  )
}

Skills.propTypes = {
  className: PropTypes.string,
  skills: PropTypes.array,
  skill: PropTypes.string
}

export default Skills
