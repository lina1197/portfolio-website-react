import React from 'react';
import "../../src/styles/style.css";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div id="Contact" className="container mt-5">
      
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" id="name" required />
          <span className="floating-label">Name</span>
        </div>
        <div className="form-group">
          <input className="form-control" type="email" id="email" required />
          <span className="floating-label">Email</span>
        </div>
        <div className="form-group">
          <textarea className="form-control" id="message" required />
          <span className="floating-label">Message</span>
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact;

