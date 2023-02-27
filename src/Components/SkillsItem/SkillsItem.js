import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'
import JSIcon from './JSIcon'
import HTML5Icon from './HTML5Icon'
import GitIcon from './GitIcon'
import CSS3Icon from './CSS3Icon'
import WebpackIcon from './WebpackIcon'
import REACTIcon from './REACTIcon'

export const SkillsItem = (props) => {
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
          icon === 'JS' ?
            <JSIcon />
            :
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
        <Typography
          variant={'LWing'}
        >
          {text}
        </Typography>
      </div>

    </li>
  )
}

SkillsItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
}

export default SkillsItem
