import React from "react"
import { ImageHim } from "./him-image"
import { ImageHer } from "./her-image"

const About = () => (
  <div>
    <section className="container" id="us">
      <h2>Us</h2>
      <div className="them her">
        <h3>Her</h3>
        <p>
          Ipsum occaecat tempor proident magna dolore commodo ut adipisicing
          tempor anim. Nulla sunt dolore deserunt fugiat ea fugiat. Minim anim
          nostrud ex deserunt ipsum anim. Nostrud nulla proident nisi deserunt
          eiusmod velit sit aute ex. Anim laboris Lorem cillum duis ad labore
          quis aliquip sint consequat sit nulla labore exercitation. Ullamco ea
          cillum magna elit sint fugiat officia esse consectetur ut sit.
        </p>
        <div style={{ minWidth: "20%" }}>
          <span className="d-block">
            <ImageHer />
          </span>
        </div>
      </div>
      <div className="them him">
        <h3>Him</h3>
        <p>
          Ipsum occaecat tempor proident magna dolore commodo ut adipisicing
          tempor anim. Nulla sunt dolore deserunt fugiat ea fugiat. Minim anim
          nostrud ex deserunt ipsum anim. Nostrud nulla proident nisi deserunt
          eiusmod velit sit aute ex. Anim laboris Lorem cillum duis ad labore
          quis aliquip sint consequat sit nulla labore exercitation. Ullamco ea
          cillum magna elit sint fugiat officia esse consectetur ut sit.
        </p>
        <div style={{ minWidth: "20%" }}>
          <span className="d-block">
            <ImageHim />
          </span>
        </div>
      </div>
    </section>
    <section className="container">
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">When</h5>
            <h6 className="card-subtitle mb-2 text-muted">13 October 2019</h6>
            <p className="card-text">
              The ceremony will begin at 4:30. Blah blah blah cocktail hour and
              reception (OPEN BAR)
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Where</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Southwick's Zoo
              <span className="d-block">Mendon, MA</span>
            </h6>
            <p className="card-text">
              Some quick info about the zoo. What there will be to do? Info
              about the hotel we're using and the shuttle to and from
            </p>
            <a href="#" className="card-link">
              Zoo Link
            </a>
            <a href="#" className="card-link">
              Nearby hotel link
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
