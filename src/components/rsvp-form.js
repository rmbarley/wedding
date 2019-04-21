import React from "react"

const RsvpForm = () => (
  <section className="container" id="rsvp-form">
    <h2>RSVP</h2>
    <h3>Please RSVP no later than September 1</h3>

    <form
      name="rsvp"
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
        <label htmlFor="inputState">Meal</label>
        <select id="inputState" name="meal" className="form-control">
          <option>Short Rib</option>
          <option>Chicken Marsala</option>
          <option>Baked Haddock</option>
          <option>Mushroom Ravioli</option>
        </select>
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
