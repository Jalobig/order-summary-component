import React from 'react'
import classes from './LinkButton.module.scss'

const LinkButton = (props) => {
  return (
    <button className={classes.button}>{props.children}</button>
  )
}

export default LinkButton