import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Carousel = () => {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    adaptiveHeight: true,
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
    <div className="container mt-4">
      <Slider {...settings}>
        {data.allFile.edges.map(img => (
          <div
            key={img.node.name}
            style={{ minWidth: "20%", maxHeight: "630px" }}
          >
            <span className="d-block">
              <Img fluid={img.node.childImageSharp.fluid} />
            </span>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
