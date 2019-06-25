import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image-es5"

import Countdown from "./countdown"

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" fluid={imageData}>
          <div className="hero-content">
            <h1>Krista and Ryan</h1>
            <h2>10.13.2019</h2>
            <Countdown date={new Date("October 13, 2019 16:30:00")} />
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Hero
