import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import RsvpForm from "../components/rsvp-form"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Grande Barley Wedding"
      keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
    />
    <Hero />
    <About />
    <RsvpForm />
    <Footer />
  </Layout>
)

export default IndexPage
