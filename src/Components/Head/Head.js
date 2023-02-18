import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Head = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <span
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {children}
    </span>
  )
}

Head.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Head
