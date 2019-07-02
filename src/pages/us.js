import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Carousel from "../components/carousel"
import Footer from "../components/footer"

const AboutPage = props => {
  return (
    <Layout className="mb-5">
      <SEO
        title="Grande Barley Wedding"
        keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
      />
      <About images={props} />
      <Carousel />
      <Footer />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    him: file(relativePath: { eq: "him.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    her: file(relativePath: { eq: "her.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    them: file(relativePath: { eq: "them.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
