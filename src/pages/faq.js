import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FaqCopy from "../components/faq-copy"
import Footer from "../components/footer"

const FAQ = () => {
  return (
    <Layout className="mb-5">
      <SEO
        title="Grande Barley Wedding"
        keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
      />
      <FaqCopy />
      <Footer />
    </Layout>
  )
}

export default FAQ
