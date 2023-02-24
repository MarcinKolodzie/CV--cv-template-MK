import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'
import EmailIcon from './EmailIcon'
import PhoneIcon from './PhoneIcon'
import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'

export const ContactItem = (props) => {
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
        icon === 'email' ?
          <EmailIcon />
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

ContactItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
}

export default ContactItem
