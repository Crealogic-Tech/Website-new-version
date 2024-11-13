import React from 'react'

const HeroButton = ({btn_name}) => {
  return (
    <a href="/book-call" className="home-hero-button floting-cta w-button">{btn_name}</a>
  )
}

export default HeroButton