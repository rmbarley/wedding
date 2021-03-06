import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Grande Barley Wedding"
      keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
    />
    <Hero />
  </Layout>
)

export default IndexPage
