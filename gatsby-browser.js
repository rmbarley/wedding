/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("bootstrap/dist/css/bootstrap.min.css")
require("./src/styles/styles.scss")

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image-es5 (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
