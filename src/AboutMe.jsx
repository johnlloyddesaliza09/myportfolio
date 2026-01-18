import './AboutMe.css'

function AboutMe({ 
  totalProjects = 0, 
  certificates = 0, 
  yearsOfExperience = 0 
}) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="about-me-container">
      {/* Header Section */}
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">✨ Transforming ideas into digital experiences ✨</p>
      </div>

      {/* Main Content Section */}
      <div className="about-content">
        {/* Left Side - Text Content */}
        <div className="about-left">
          <p className="hello-text">Hello, I'm</p>
          <h2 className="name-text">John Lloyd Desaliza</h2>
          <p className="description-text">
          I am a passionate Software Developer and IT student with experience in building web-based systems and mobile applications. I enjoy turning ideas into functional and user-friendly solutions using modern technologies such as React.js, JavaScript, and database-driven systems. I have worked on various academic and personal projects, including management systems and IoT-integrated applications, which strengthened my problem-solving and development skills. I am eager to continue learning, improve my technical abilities, and contribute to real-world projects.
          </p>
          
          {/* Buttons */}
          <div className="about-buttons">
            <a href="/John_Lloyd_Software_Dev_Intern.pdf" download="John_Lloyd_Software_Dev_Intern.pdf" className="btn-download-cv">
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </a>
            <button className="btn-view-projects" onClick={() => scrollToSection('portfolio')}>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              View Projects
            </button>
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="about-right">
          <div className="profile-picture-container">
            <div className="profile-picture-placeholder">
              <img src="/jlpic.jpg" alt="John Lloyd Desaliza" className="profile-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards Section */}
      <div className="statistics-section">
        <div className="stat-card">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">TOTAL PROJECTS</p>
            <p className="stat-description">Innovative web solutions crafted</p>
          </div>
          <div className="stat-number">{totalProjects}</div>
          <div className="stat-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">CERTIFICATES</p>
            <p className="stat-description">Professional skills validated</p>
          </div>
          <div className="stat-number">{certificates}</div>
          <div className="stat-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">YEARS OF EXPERIENCE</p>
            <p className="stat-description">Continuous learning journey</p>
          </div>
          <div className="stat-number">{yearsOfExperience}</div>
          <div className="stat-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
