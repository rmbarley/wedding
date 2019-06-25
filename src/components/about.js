import React from "react"
import Img from "gatsby-image"

const About = props => (
  <section className="container" id="us">
    <h1>Us</h1>
    <div>
      <h2>Her</h2>
      <p>
        Krista grew up in Derry, NH. She wasn't a horse girl, but she wanted to
        be. She used to love finding turtles in streams. She still does, but she
        used to too. She is a pediatric neurology resident at Cincinnati
        Children's hospital. She can read your fortune in your brain waves.
      </p>
      <div style={{ minWidth: "20%", maxWidth: "5rem" }}>
        <span className="d-block">
          <Img fluid={props.images.data.her.childImageSharp.fluid} />
        </span>
      </div>
    </div>
    <div>
      <h2>Him</h2>
      <p>
        Ryan loves Krista. He also loves Carly Rae Jepsen, knowing a lot about
        coffee, and pretending to know a lot about a lot.
      </p>
      <div style={{ minWidth: "20%", maxWidth: "5rem" }}>
        <span className="d-block">
          <Img fluid={props.images.data.him.childImageSharp.fluid} />
        </span>
      </div>
    </div>
    <div>
      <h2>Them</h2>
      <p>
        They met in college even though they went to different colleges next
        door to each other. It definitely wasn't online. When she started
        medical school, he followed her there, and then to Cincinnati for
        residency. Together they eat too much, ride their bikes too little, and
        go to soccer games. They are raising an increasingly alarming number of
        cats.
      </p>
      <div style={{ minWidth: "20%", maxWidth: "5rem" }}>
        <Img
          fluid={{
            ...props.images.data.them.childImageSharp.fluid,
            aspectRatio: 1 / 1,
          }}
        />
      </div>
    </div>
  </section>
)

export default About
