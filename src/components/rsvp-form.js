import React, { Component } from "react"

class RsvpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
    }
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      selectedOption: event.target.value,
    })
  }
  render() {
    return (
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
          <fieldset>
            <div className="form-group radio-form-group ">
              First things first: Are you Coming?
              <div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="rsvpYes"
                    name="amComing"
                    value="true"
                    className="custom-control-input"
                    onClick={event => this.handleChange(event)}
                  />
                  <label className="custom-control-label" htmlFor="rsvpYes">
                    Yes!{" "}
                    <span role="img" aria-label="yes">
                      🎉
                    </span>
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="rsvpNo"
                    name="amComing"
                    value="false"
                    className="custom-control-input"
                    onClick={event => this.handleChange(event)}
                  />
                  <label className="custom-control-label" htmlFor="rsvpNo">
                    No{" "}
                    <span role="img" aria-label="no">
                      😿
                    </span>
                  </label>
                </div>
              </div>
              <div className="form-group ">
                <label htmlFor="rsvpName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="rsvpName"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
          </fieldset>
          {this.state.selectedOption === "true" ? (
            <fieldset>
              <div className="form-group ">
                <label htmlFor="rsvpEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="rsvpEmail"
                  placeholder="you@mail.com"
                />
              </div>
              <div className="form-group ">
                <label htmlFor="rsvpPhoneNumber">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  id="rsvpPhoneNumber"
                  placeholder="(123) 456-789"
                />
              </div>
              <div className="form-group ">
                <label htmlFor="inputState">
                  Meal Choice <br />
                  (served with roasted potatoes and seasonal vegetable medley)
                </label>
                <select id="inputState" name="meal[]" className="form-control">
                  <option value="short-rib">Short Rib</option>
                  <option value="chicken">
                    Chicken Marsala with mushrooms
                  </option>
                  <option value="fish">
                    New England-Style Baked Haddock with cracker crumb topping
                    and white wine lemon sauce
                  </option>
                  <option value="vegetarian">
                    Ravioli stuffed with wild mushrooms, and spinach with a sage
                    cream sauce and pecorino
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dietary-restrictions">
                  Any Dietary Restrictions We Didn't Account For?
                </label>
                <textarea
                  className="form-control"
                  name="dietary-restrictions"
                  id="dietary-restrictions"
                />
              </div>
              <div className="form-group ">
                <label htmlFor="rsvpSong">Got a Song Request?</label>
                <input
                  type="text"
                  className="form-control"
                  name="song"
                  id="rsvpPhoneNumber"
                  placeholder=""
                />
              </div>
              <div className="form-group ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="assistance"
                    name="assistance"
                  />
                  <label className="form-check-label" htmlFor="assistance">
                    I will need assistance getting to the ceremony site
                  </label>
                </div>
              </div>
            </fieldset>
          ) : null}
          <div
            className={`d-flex ${
              this.state.selectedOption ? "d-row-reverse" : "d-row"
            }`}
          >
            <button
              type="submit"
              className="btn btn-dark"
              disabled={this.state.selectedOption === null}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default RsvpForm
