import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Success!" />
    <section className="container">
      <h1>Success!</h1>
      <h4>We got your RSVP!</h4>

      <p>
        If you are bringing a guest, please go back and fill it out for them.
      </p>
      <Link to="/">Back</Link>
    </section>
  </Layout>
)

export default Success
