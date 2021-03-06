import React from "react"
import Map from "./map"

const Details = () => (
  <section className="container">
    <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">When</h5>
          <h6 className="card-subtitle mb-2 text-muted">13 October 2019</h6>
          <p className="card-text">
            The ceremony will begin at 4:30. Plan to arrive by 3:30 to get
            checked in and make your way to the ceremony site in the Deer
            Forest. Don't get too distracted by the animals&mdash;the zoo will
            be open to guests to wander around between the ceremony and dinner
            at 7:00.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Where</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Southwick's Zoo
            <span className="d-block">2 Southwick St, Mendon, MA</span>
          </h6>
          <Map isMarkerShown />
          <p className="card-text">
            Staying Overnight? We've booked a block of rooms at the Holiday Inn
            Express Boston/Milford. There will be a shuttle too and from the
            zoo.
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
            href="https://www.hiexpress.com/redirect?path=rates&brandCode=EX&localeCode=en&regionCode=1&hotelCode=fmmma&checkInDate=12&checkInMonthYear=092019&checkOutDate=14&checkOutMonthYear=092019&_PMID=99801505&GPC=gbw&cn=no&viewfullsite=true"
            className="card-link d-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hotel Room Block (Book by 9/27)
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Saturday Night</h5>
          <h6 className="card-subtitle mb-2 text-muted">12 October 2019</h6>
          <p className="card-text">
            We'd like to have a casual get-together Saturday night to thank
            everyone who traveled to come. We are still working on finding a
            venue to host it, so check back for updates.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Details
