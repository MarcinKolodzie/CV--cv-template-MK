import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Photo = (props) => {
  const {
    className,
    cvPhoto,
    src,
    ...otherProps
  } = props

  return (
    <div
      className={classes.photo}
    >
      <img
        src={cvPhoto}
        alt={'cv-pho'}
        {...otherProps}
      />
    </div>
  )
}

Photo.propTypes = {
  className: PropTypes.string,
  cvPhoto: PropTypes.string,
  src: PropTypes.string
}

export default Photo
