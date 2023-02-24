import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Typography = (props) => {
  const {
    className,
    children,
    variant,
    ...otherProps
  } = props

  const variantClass = classes[variant]

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h2work', 'h3work', 'h4work'])
}

export default Typography
