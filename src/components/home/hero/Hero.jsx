import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO NOBEL SCHOOL' title='Best Education For Your Child' />
            <p>Where curiosity meets knowledge, and dreams take flight. Building bright futures with innovation, values, and excellence!</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
