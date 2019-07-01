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
        Children's hospital. She can read your fortune in your brain waves. She
        labored over these bios for 2 minutes.
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
        Ryan Barley’s life goal is to eat a noodle from every country. He likes
        to cook, listen to music you’ve never heard of, and accumulate books. He
        does not have a spreadsheet of video games he’s beaten, but you wouldn’t
        be surprised if he did. He’s popular at parties. He loves dogs, the
        smaller the better. He built this website with his own two mechanical
        keyboards.
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
