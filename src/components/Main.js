import React from 'react'
import { Button } from './Button'
import './Main.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

function Main() {
  return (
    <div className='hero-container'>
      <video src='/public/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            WATCH TRAILER <FontAwesomeIcon className='fa-play-circle' icon={faPlayCircle} />
        </Button>
      </div>
    </div>
  )
}

export default Main
