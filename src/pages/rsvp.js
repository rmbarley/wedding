import React from "react"

import RsvpForm from "../components/rsvp-form"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
const RSVP = () => (
  <Layout>
    <SEO
      title="Grande Barley Wedding"
      keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
    />
    <RsvpForm />
    <Footer />
  </Layout>
)

export default RSVP
