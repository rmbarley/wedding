import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container mt-4">
      <h1>NOT FOUND</h1>
      <button className="btn btn-link">
        <Link to="/">Home</Link>
      </button>
    </div>
  </Layout>
)

export default NotFoundPage
