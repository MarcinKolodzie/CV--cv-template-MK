import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Languages = (props) => {
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
        Languages
      </Typography>
      {children}
    </div>
  )
}

Languages.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Languages
