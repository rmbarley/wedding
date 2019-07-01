import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FaqCopy from "../components/faq-copy"

const FAQ = () => {
  return (
    <Layout>
      <SEO
        title="Grande Barley Wedding"
        keywords={[`wedding`, `ryan barley`, `krista grande`, `deer forest`]}
      />
      <FaqCopy />
    </Layout>
  )
}

export default FAQ
