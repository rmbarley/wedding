import React from "react"
import Countdown from "./countdown"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero--content">
        <h1>Krista and Ryan</h1>
        <h2>10.13.2019</h2>
        <Countdown date={new Date("October 13, 2019 16:30:00")} />
      </div>
    </section>
  )
}

export default Hero
