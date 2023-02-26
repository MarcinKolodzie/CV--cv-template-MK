import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'
import HTML5Icon from './HTML5Icon'
import GitIcon from './GitIcon'
import CSS3Icon from './CSS3Icon'
import WebpackIcon from './WebpackIcon'
import REACTIcon from './REACTIcon'

export const LanguagesItem = (props) => {
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
          icon === 'CSS3' ?
            <CSS3Icon />
            :
            icon === 'Webpack' ?
              <WebpackIcon />
              :
              icon === 'Git' ?
                <GitIcon />
                :
                icon === 'REACT' ?
                  <REACTIcon />
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

LanguagesItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
}

export default LanguagesItem
