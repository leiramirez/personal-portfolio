import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Let's get in touch!</h1>
      <div className="contact__container">
        <div className="display__img__container">
          <img className="display__img" src="images/profpic.jpg" />
        </div>
        <div className="about__me">
          <div className="about__me__text">
            <p>My primary interests are <strong>software and web development</strong>, but I would love to learn more about the industry and community solutions that can be achieved with tech.</p>
            <p>Outside of work, I love to read and write stories, and play video games. I'm also a pet owner to a dachshund named Kohi.</p>
            <p>Feel free to contact me through any of the channels below!</p>
          </div>
          <div className="contact__icons">
            <a href="mailto:fleirramirez@gmail.com"><FontAwesomeIcon icon="fa-envelope" /></a>
            <a href="https://www.linkedin.com/in/fleiramirez/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="https://github.com/leiramirez"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact