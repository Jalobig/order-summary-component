import React from 'react'
import classes from './Display.module.scss'
import HeroImg from '../../images/illustration-hero.svg'

const Display = () => {
  return (
    <img src={HeroImg} alt='Person dancing to music' className={classes.display}/>
  )
}

export default Display