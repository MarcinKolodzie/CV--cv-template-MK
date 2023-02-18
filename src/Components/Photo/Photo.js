import React from 'react'
import PropTypes from 'prop-types'
import cvPhoto from '../img/CV-photo.png'

import classes from './styles.module.css'

export const Photo = (props) => {
  const {
    className,
    src,
    ...otherProps
  } = props

  return (
    <img
      src={cvPhoto}
      className={classes.photo}
      alt={'cv-pho'}
      {...otherProps}
    />
  )
}

Photo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string
}

export default Photo
