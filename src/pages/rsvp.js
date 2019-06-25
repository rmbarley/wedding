import React from "react"

import RsvpForm from "../components/rsvp-form"
import Venue from "../components/venue"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RSVP = () => (
  <Layout>
    <SEO
      title="Grande Barley Wedding"
      keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
    />
    <Venue />
    <RsvpForm />
  </Layout>
)

export default RSVP
