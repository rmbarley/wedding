import React from "react"

const Venue = () => (
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
            Some quick info about the zoo. What there will be to do? Info about
            the hotel we're using and the shuttle to and from
          </p>
          <a
            href="https://southwickszoo.com/"
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoo Link
          </a>
          <a
            href="https://mariott.com"
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nearby hotel link
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Venue
