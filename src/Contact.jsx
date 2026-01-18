import './Contact.css'

function Contact() {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1 className="contact-title">Get In Touch</h1>
        <div className="contact-accent-line"></div>
      </div>

      {/* Introductory Text */}
      <p className="contact-intro">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      {/* Contact Buttons */}
      <div className="contact-buttons">
        {/* Email Button */}
        <a href="mailto:johnlloyddesaliza15@gmail.com" className="contact-button email-button">
          <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span className="contact-text">johnlloyddesaliza15@gmail.com</span>
        </a>

        {/* Facebook Button */}
        <a href="https://www.facebook.com/share/1AzbTqKJH1/" target="_blank" rel="noopener noreferrer" className="contact-button">
          <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span className="contact-text">Facebook</span>
        </a>

        {/* LinkedIn Button */}
        <a href="https://www.linkedin.com/in/john-lloyd-desaliza-8a41b3398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-button">
          <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span className="contact-text">LinkedIn</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
