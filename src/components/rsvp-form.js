import React from "react"

const RsvpForm = () => (
  <section className="container" id="rsvp-form">
    <h2>RSVP</h2>
    <h3>Please RSVP no later than September 1</h3>

    <form name="rsvp" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="rsvp" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="form-group col-lg-8">
        <label htmlFor="rsvpName">Name</label>
        <input
          type="text"
          className="form-control"
          id="rsvpName"
          placeholder="Your Name"
        />
      </div>
      <div className="form-group col-lg-8">
        <label htmlFor="rsvpEmail">Email</label>
        <input
          type="email"
          className="form-control"
          id="rsvpEmail"
          placeholder="you@mail.com"
        />
      </div>
      <div className="form-group col-lg-8">
        <label htmlFor="rsvpPhoneNumber">Phone Number</label>
        <input
          type="number"
          className="form-control"
          id="rsvpPhoneNumber"
          placeholder="(123) 456-789"
        />
      </div>

      <div className="form-group col-lg-8">
        <label htmlFor="inputState">Meal</label>
        <select id="inputState" className="form-control">
          <option>Short Rib</option>
          <option>Chicken Masala</option>
          <option>Baked Haddock</option>
          <option>Mushroom Ravioli</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </section>
)

export default RsvpForm
