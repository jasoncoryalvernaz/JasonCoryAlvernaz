import React from "react"
import { navigate } from "gatsby"
import { submitFormData } from "../utils/helpers"

import FormStyles from "../styles/FormStyles"
import FormHeadingStyles from "../styles/FormHeadingStyles"
import SectionStyles from "../styles/SectionStyles"

const Contact = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    submitFormData(e, state)
    navigate("/thanks")
  }

  const { name, email, subject, message } = state

  return (
    <SectionStyles className="contact">
      <FormHeadingStyles>
        <h2>Let's Create Something Beautiful!</h2>
      </FormHeadingStyles>
      <FormStyles
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" onChange={handleChange} />
        <input
          name="name"
          type="text"
          placeholder="Name"
          aria-label="Enter Name"
          onChange={handleChange}
          value={name}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Enter Email Address"
          onChange={handleChange}
          value={email}
          required
        />
        <input
          className="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          aria-label="Enter Subject"
          onChange={handleChange}
          value={subject}
          required
        />
        <textarea
          className="message"
          name="message"
          type="text"
          placeholder="What can I create for you?"
          aria-label="Enter Message"
          onChange={handleChange}
          value={message}
          required
        />
        <button
          disabled={!name || !email || !subject || !message}
          type="submit"
        >
          Send Email
        </button>
      </FormStyles>
    </SectionStyles>
  )
}

export default Contact