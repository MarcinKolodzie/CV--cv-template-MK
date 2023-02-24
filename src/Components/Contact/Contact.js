import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

import classes from './styles.module.css'

export const Contact = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <ul
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography
        variant={'h2'}
      >
        Contact
      </Typography>

      {children}
    </ul>
  )
}

Contact.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Contact
