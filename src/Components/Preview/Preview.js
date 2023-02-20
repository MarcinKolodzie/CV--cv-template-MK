import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

import classes from './styles.module.css'

export const Preview = (props) => {
  const {
    className,
    heading,
    degree1,
    degree2,
    text,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Typography
        variant={'h1'}
      >
        {heading}
      </Typography>
      <Typography
        variant={'h2'}
      >
        {degree1}
      </Typography>
      <Typography
        variant={'h2'}
      >
        {degree2}
      </Typography>
      <Typography
        variant={'h3'}
      >
        {text}
      </Typography>
    </div>
  )
}

Preview.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  degree1: PropTypes.string,
  degree2: PropTypes.string,
  text: PropTypes.string
}

export default Preview
