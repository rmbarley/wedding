import React from "react"

const RsvpForm = () => (
  <section className="container" id="rsvp-form">
    <h2>RSVP</h2>
    <h4>(Please RSVP no later than September 1)</h4>

    <form
      name="rsvp"
      className="mt-3"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="rsvp" />
      <input type="hidden" name="bot-field" />
      <div className="form-group col-lg-8">
        <label htmlFor="rsvpName">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="rsvpName"
          placeholder="Your Name"
        />
      </div>
      <div className="form-group col-lg-8">
        <label htmlFor="rsvpEmail">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="rsvpEmail"
          placeholder="you@mail.com"
        />
      </div>
      <div className="form-group col-lg-8">
        <label htmlFor="rsvpPhoneNumber">Phone Number</label>
        <input
          type="number"
          className="form-control"
          name="phone"
          id="rsvpPhoneNumber"
          placeholder="(123) 456-789"
        />
      </div>
      <div className="form-group col-lg-8">
        <label htmlFor="inputState">
          Meal Choice (served with roasted potatoes and seasonal vegetable
          medley)
        </label>
        <select id="inputState" name="meal" className="form-control">
          <option>Short Rib</option>
          <option>Chicken Marsala with mushrooms</option>
          <option>
            New England-Style Baked Haddock with cracker crumb topping and white
            wine lemon sauce
          </option>
          <option>
            Ravioli stuffed with wild mushrooms, and spinach with a sage cream
            sauce and pecorino
          </option>
        </select>
      </div>
      <div className="form-group col-lg-8">
        <label htmlFor="dietary-restrictions">
          Any Dietary Restrictions We Didn't Account For?
        </label>
        <textarea
          className="form-control"
          name="dietary-restrictions"
          id="dietary-restrictions"
        />
      </div>
      <div className="form-group col-lg-8">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="assistance" />
          <label className="form-check-label" htmlFor="assistance">
            I will need assistance getting to the ceremony site
          </label>
        </div>
      </div>
      <div className="col-lg-8 d-flex flex-row-reverse">
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </div>
    </form>
  </section>
)

export default RsvpForm
