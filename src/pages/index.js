import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import RsvpForm from "../components/rsvp-form"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Grande Barley Wedding"
      keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
    />
    <Hero />
    <RsvpForm />
  </Layout>
)

export default IndexPage
