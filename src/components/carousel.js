import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "linear",
  }
  const data = useStaticQuery(graphql`
    query allImages {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "carousel" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="container mt-4 pb-2">
      <Slider {...settings}>
        {data.allFile.edges.map(img => (
          <div key={img.node.name}>
            <Img fluid={img.node.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
