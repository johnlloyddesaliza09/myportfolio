import { useState } from 'react'
import './Projects.css'

// Project data
const projectsData = {
  'aritmatika-solver': {
    title: 'e-commerce website',
    description: 'Developed a fully functional e-commerce website with product catalog, shopping cart, and checkout features for online retail operations. The platform provides a seamless shopping experience with secure payment processing, order management, and user-friendly interface designed to enhance customer satisfaction and drive online sales.',
    technologies: ['ReactJS', 'JavaScript', 'CSS', 'HTML', 'MYSQL'],
    totalTechnologies: 5,
    keyFeatures: [
      'Comprehensive product catalog with search and filter functionality',
      'Shopping cart with real-time price calculation',
      'Secure checkout process with payment integration',
      'Order management and tracking system'
    ],
    images: ['/ss.png', '/ss1.png', '/ss2.png', '/ss3.png'],
    liveDemo: '#',
    github: '#'
  },
  'autochat-discord': {
    title: 'Point of Sale (POS) system',
    description: 'Built a Point of Sale (POS) system enabling efficient transaction processing, inventory tracking, and sales reporting for small business management. The system streamlines daily operations with real-time inventory updates, comprehensive sales analytics, and user-friendly interface that helps businesses manage their operations more effectively.',
    technologies: ['MYSQL', 'C#', 'Java', 'Python', 'Material UI'],
    totalTechnologies: 5,
    keyFeatures: [
      'Real-time transaction processing and receipt generation',
      'Automated inventory tracking and stock management',
      'Comprehensive sales reporting and analytics dashboard',
      'User-friendly interface for quick and efficient operations'
    ],
    images: ['/ss4.png', '/ss5.png', '/ss6.png', '/ss7.png', '/ss8.png', '/ss9.png', '/ss10.png', '/ss11.png', '/ss12.png'],
    liveDemo: '#',
    github: '#',
    videoLink: 'https://drive.google.com/file/d/1Gl-zgXymD7XlNEV5UlgArNdQLtAtMkPj/view?usp=drivesdk'
  },
  'buku-catatan': {
    title: 'Quizzen',
    description: 'Developed Quizzen, an interactive quiz application designed specifically for high school students covering essential subjects including Science, Mathematics, Filipino, and other core curriculum topics. The application provides a comprehensive learning platform that helps students practice and master key concepts through engaging quizzes, instant feedback, and progress tracking to enhance their academic performance.',
    technologies: ['React Native', 'CSS', 'JavaScript', 'Java', 'MySQL'],
    totalTechnologies: 5,
    keyFeatures: [
      'Subject-based quizzes covering Science, Math, Filipino, and more',
      'Interactive question formats with multiple choice and various question types',
      'Instant feedback and detailed explanations for each answer',
      'Progress tracking and performance analytics for students'
    ],
    images: ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg', '/s5.jpg', '/s6.jpg', '/s7.jpg', '/s8.jpg', '/s9.jpg', '/s10.jpg', '/s11.jpg', '/s12.jpg', '/s13.jpg', '/s14.jpg', '/s15.jpg', '/s16.jpg', '/s17.jpg'],
    liveDemo: '#',
    github: '#'
  },
  'project-4': {
    title: 'E-Books',
    description: 'Developed E-Books, a comprehensive digital library application that provides users with access to a vast collection of electronic books across various genres and categories. The platform offers an intuitive reading experience with features like bookmarking, reading progress tracking, and personalized recommendations, making it easy for users to discover, read, and manage their favorite books in a modern digital format.',
    technologies: ['React Native', 'Firebase', 'Tailwind'],
    totalTechnologies: 3,
    keyFeatures: [
      'Extensive digital library with books across multiple genres',
      'Bookmarking and reading progress tracking functionality',
      'Personalized book recommendations based on reading history',
      'User-friendly interface with smooth reading experience'
    ],
    images: ['/b1.jpg', '/b2.jpg', '/b3.jpg', '/b4.png'],
    liveDemo: '#',
    github: '#'
  },
  'quizme': {
    title: 'QuizMe',
    description: 'Developed QuizMe, an interactive quiz application designed specifically for high school students covering essential subjects including Science, Mathematics, Filipino, and other core curriculum topics. The application provides a comprehensive learning platform that helps students practice and master key concepts through engaging quizzes, instant feedback, and progress tracking to enhance their academic performance.',
    technologies: ['Flutter', 'Dart', 'VS Code', 'Mobile App', 'UI/UX', 'Firebase'],
    totalTechnologies: 6,
    keyFeatures: [
      'Subject-based quizzes covering Science, Math, Filipino, and more',
      'Interactive question formats with multiple choice and fill-in-the-blank',
      'Instant feedback and detailed explanations for each answer',
      'Progress tracking and performance analytics for students'
    ],
    images: ['/ok.jpg'],
    liveDemo: '#',
    github: '#'
  }
}

function Projects() {
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="projects-container">
      {/* Header Section */}
      <div className="projects-header">
        <h1 className="projects-title">Portfolio Showcase</h1>
        <p className="projects-description">
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      {/* Category Navigation Tabs */}
      <div className="category-tabs">
        <button 
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          Projects
        </button>
        <button 
          className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
          onClick={() => setActiveTab('certificates')}
        >
          <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Certificates
        </button>
        <button 
          className={`tab-button ${activeTab === 'techstack' ? 'active' : ''}`}
          onClick={() => setActiveTab('techstack')}
        >
          <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path>
          </svg>
          Tech Stack
        </button>
      </div>

      {/* Content Grid */}
      <div className={`content-grid ${activeTab === 'certificates' ? 'certificates-grid' : activeTab === 'techstack' ? 'techstack-grid' : ''}`}>
        {activeTab === 'projects' && (
          <>
            <div className="project-card">
              <div className="project-image">
                <div className="project-preview">
                  <img src="/ss.png" alt="e-commerce website" className="project-screenshot" />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">e-commerce website</h3>
                <p className="project-description">
                  Developed a fully functional e-commerce website with product catalog, shopping cart, and checkout features for online retail operations.
                </p>
                <div className="project-buttons">
                  <button className="btn-live-demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </button>
                  <button className="btn-details" onClick={() => setSelectedProject('aritmatika-solver')}>
                    Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-preview">
                  <img src="/ss4.png" alt="Point of Sale (POS) system" className="project-screenshot" />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Point of Sale (POS) system</h3>
                <p className="project-description">
                  Built a Point of Sale (POS) system enabling efficient transaction processing, inventory tracking, and sales reporting for small business management.
                </p>
                <div className="project-buttons">
                  <button className="btn-live-demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </button>
                  <button className="btn-details" onClick={() => setSelectedProject('autochat-discord')}>
                    Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-preview">
                  <img src="/s20.jpg" alt="Quizzen" className="project-screenshot" />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Quizzen</h3>
                <p className="project-description">
                  Developed Quizzen, an interactive quiz application designed specifically for high school students covering essential subjects including Science, Mathematics, Filipino, and other core curriculum topics.
                </p>
                <div className="project-buttons">
                  <button className="btn-live-demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </button>
                  <button className="btn-details" onClick={() => setSelectedProject('buku-catatan')}>
                    Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-preview">
                  <img src="/b4.png" alt="E-Books" className="project-screenshot" />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">E-Books</h3>
                <p className="project-description">
                  Developed E-Books, a comprehensive digital library application that provides users with access to a vast collection of electronic books across various genres and categories.
                </p>
                <div className="project-buttons">
                  <button className="btn-live-demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </button>
                  <button className="btn-details" onClick={() => setSelectedProject('project-4')}>
                    Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-preview">
                  <img src="/ok.jpg" alt="QuizMe" className="project-screenshot" />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">QuizMe</h3>
                <p className="project-description">
                  Developed QuizMe, an interactive quiz application designed specifically for high school students covering essential subjects including Science, Mathematics, Filipino, and other core curriculum topics.
                </p>
                <div className="project-buttons">
                  <button className="btn-live-demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </button>
                  <button className="btn-details" onClick={() => setSelectedProject('quizme')}>
                    Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'certificates' && (
          <>
            {/* Certificates will be displayed here */}
          </>
        )}

        {activeTab === 'techstack' && (
          <>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
              </div>
              <p className="item-name">HTML</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
              </div>
              <p className="item-name">CSS</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              </div>
              <p className="item-name">JavaScript</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              <p className="item-name">ReactJS</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" />
              </div>
              <p className="item-name">Vite</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              </div>
              <p className="item-name">Node JS</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
              </div>
              <p className="item-name">Bootstrap</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
              </div>
              <p className="item-name">Firebase</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI" />
              </div>
              <p className="item-name">Material UI</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" />
              </div>
              <p className="item-name">Vercel</p>
            </div>
            <div className="grid-item">
              <div className="item-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              </div>
              <p className="item-name">MySQL</p>
            </div>
          </>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal 
          project={projectsData[selectedProject]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

// Project Details Modal Component
function ProjectDetailsModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  if (!project) return null;

  const images = project.images || [];
  const hasImages = images.length > 0;
  const hasVideoLink = project.videoLink;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const openZoomedImage = (index) => {
    setZoomedImageIndex(index);
    setIsImageZoomed(true);
  };

  const closeZoomedImage = () => {
    setIsImageZoomed(false);
  };

  const nextZoomedImage = () => {
    setZoomedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevZoomedImage = () => {
    setZoomedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-details-overlay" onClick={onClose}>
      <div className="project-details-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Navigation */}
        <div className="project-details-nav">
          <button className="back-button" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back
          </button>
          <div className="breadcrumbs">
            Projects &gt; {project.title}
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="project-details-content">
          {/* Left Column */}
          <div className="project-details-left">
            {/* Title */}
            <h1 className="project-details-title">
              {project.title.split('-')[0]}
              <span className="title-underline">{project.title.includes('-') ? '-' + project.title.split('-')[1] : ''}</span>
            </h1>

            {/* Description */}
            <p className="project-details-description">
              {project.description}
            </p>

            {/* Statistics Cards */}
            <div className="project-stats-cards">
              <div className="project-stat-card">
                <svg className="stat-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <div className="stat-card-number">{project.totalTechnologies}</div>
                <div className="stat-card-label">Total Technologies Used</div>
              </div>
              <div className="project-stat-card">
                <svg className="stat-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <div className="stat-card-number">{project.keyFeatures.length}</div>
                <div className="stat-card-label">Key Features</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="project-details-buttons">
              {hasVideoLink ? (
                <button className="btn-live-demo-details" onClick={() => setIsVideoModalOpen(true)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  See Video
                </button>
              ) : (
                <a href={project.liveDemo} className="btn-live-demo-details" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              )}
              <a href={project.github} className="btn-github-details" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Github
              </a>
            </div>

            {/* Technologies Used */}
            <div className="technologies-section">
              <h3 className="technologies-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                Technologies Used
              </h3>
              <div className="technologies-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="project-details-right">
            {/* Image Carousel for e-commerce */}
            {hasImages ? (
              <div className="project-image-carousel">
                <div className="carousel-container">
                  <button className="carousel-button carousel-prev" onClick={prevImage} aria-label="Previous image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
                  <div className="carousel-image-wrapper" onClick={() => openZoomedImage(currentImageIndex)}>
                    <img 
                      src={images[currentImageIndex]} 
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="carousel-image"
                      style={{ cursor: 'zoom-in' }}
                    />
                  </div>
                  
                  <button className="carousel-button carousel-next" onClick={nextImage} aria-label="Next image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
                
                {/* Image Indicators */}
                {images.length > 1 && (
                  <div className="carousel-indicators">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="carousel-counter">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                )}
              </div>
            ) : (
              /* Project Mockup for other projects */
              <div className="project-mockup-container">
                <div className="laptop-mockup">
                  <div className="laptop-screen">
                    <div className="mockup-content">
                      <h3 className="mockup-title">Automate Your Discord Messages Effortlessly!</h3>
                      <button className="mockup-button">Get Started</button>
                    </div>
                    <div className="discord-window">
                      <div className="discord-sidebar">
                        <div className="discord-channel"></div>
                        <div className="discord-channel"></div>
                        <div className="discord-channel"></div>
                      </div>
                      <div className="discord-chat">
                        <div className="discord-message-item"></div>
                        <div className="discord-message-item"></div>
                        <div className="discord-message-item"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Key Features */}
            <div className="key-features-section">
              <h3 className="key-features-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Key Features
              </h3>
              <div className="key-features-list">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="key-feature-item">
                    <div className="feature-bullet"></div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {isImageZoomed && hasImages && (
        <div className="image-zoom-overlay" onClick={closeZoomedImage}>
          <div className="image-zoom-container" onClick={(e) => e.stopPropagation()}>
            <button className="image-zoom-close" onClick={closeZoomedImage} aria-label="Close zoomed image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {images.length > 1 && (
              <>
                <button className="image-zoom-prev" onClick={prevZoomedImage} aria-label="Previous image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="image-zoom-next" onClick={nextZoomedImage} aria-label="Next image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}
            <div className="image-zoom-content">
              <img 
                src={images[zoomedImageIndex]} 
                alt={`${project.title} zoomed ${zoomedImageIndex + 1}`}
                className="zoomed-image"
              />
            </div>
            {images.length > 1 && (
              <div className="image-zoom-counter">
                {zoomedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Google Drive Video Modal */}
      {isVideoModalOpen && hasVideoLink && (
        <div className="video-modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setIsVideoModalOpen(false)} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="video-modal-content">
              <iframe 
                src={project.videoLink.replace('/view?usp=drivesdk', '/preview')}
                className="video-player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Project Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
