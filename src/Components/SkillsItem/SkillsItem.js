import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'
import HTML5Icon from './HTML5Icon'
import PhoneIcon from './PhoneIcon'
import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'

export const SkillsItem = (props) => {
  const {
    className,
    text,
    icon,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.iconWrapper}
      >
        {
        icon === 'HTML5' ?
          <HTML5Icon />
          :
          icon === 'phone' ?
            <PhoneIcon />
            :
            icon === 'github' ?
              <GitHubIcon />
              :
              icon === 'linkedIn' ?
                <LinkedInIcon />
                :
                null
}
      </div>
      <div
        className={classes.textWrapper}
      >
        <Typography>
          {text}
        </Typography>
      </div>

    </li>
  )
}

SkillsItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
}

export default SkillsItem
