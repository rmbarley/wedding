import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Details from "../components/details"

const DetailsPage = () => {
  return (
    <Layout className="mb-5">
      <SEO
        title="Grande Barley Wedding"
        keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
      />
      <Details />
      <Footer />
    </Layout>
  )
}

export default DetailsPage
