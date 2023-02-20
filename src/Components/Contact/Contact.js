import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Contact = (props) => {
  const {
    className,
    email,
    phone,
    linkLI,
    linkGIT,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography >
        {email}
      </Typography>
      <Typography >
        {phone}
      </Typography>
      <Typography >
        {linkLI}
      </Typography>
      <Typography >
        {linkGIT}
      </Typography>
    </div>
  )
}

Contact.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  linkLI: PropTypes.string,
  linkGIT: PropTypes.string
}

export default Contact
