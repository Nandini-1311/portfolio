import { useEffect, useState } from 'react'
import profile from './assets/profile.png'
import './App.css'

const slides = [
  {
    id: 'profile',
    eyebrow: 'Profile',
    title: 'Building a career at the intersection of software and design.',
    description:
      'Motivated third-year B.Voc Software Development student at Ramanujan College, University of Delhi, seeking entry-level opportunities to apply academic knowledge in real-world software development environments.',
    layout: 'profile',
  },
  {
    id: 'education',
    eyebrow: 'Education',
    title: 'An academic foundation shaped by software, management, and mathematics.',
    description:
      'Current degree work is centered on software development, supported by management studies and a strong school record.',
    layout: 'education',
  },
  {
    id: 'skills',
    eyebrow: 'Skills',
    title: 'Frontend-first, with room to operate across tools, databases, and teamwork.',
    description:
      'The resume highlights both technical breadth and practical work habits, which fits well for junior frontend and full-stack learning roles.',
    layout: 'skills',
  },
  {
    id: 'societies',
    eyebrow: 'Societies',
    title: 'Progressive leadership through campus communities.',
    description:
      'These roles show consistency, ownership, and creative involvement across multiple years at Ramanujan College.',
    layout: 'societies',
  },
  {
    id: 'projects',
    eyebrow: 'Projects',
    title: 'ASTER',
    description:
      'Aster is a Weather API fetching website which takes weather from another platform and shows suggestions of outfits based on the current weather.',
    layout: 'projects',
  },
]

const education = [
  {
    degree: 'B.Voc Software Development with minors in Management',
    place: 'Ramanujan College, University of Delhi',
    years: '2023-2026/27',
    score: 'CGPA 7.5',
  },
  {
    degree: 'Class 12 - Humanities with Mathematics',
    place: 'N.R. Convent Sr. Sec. School (CBSE)',
    years: '2022-2023',
    score: '90%',
  },
  {
    degree: 'Class 10',
    place: 'N.R. Convent Sr. Sec. School (CBSE)',
    years: '2020-2021',
    score: '92%',
  },
]

const skillGroups = [
  {
    label: 'Languages & Frameworks',
    items: ['HTML', 'CSS', 'Java', 'JavaScript', 'React JS', 'Angular', 'Python'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Netlify', 'VS Code', 'Canva', 'Microsoft Excel', 'Slide Presentation'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    label: 'Soft Skills',
    items: ['Time Management', 'Teamwork', 'Adaptability', 'Leadership', 'Creativity', 'Interpersonal Skills'],
  },
]

const societyRoles = [
  'Student Coordinator at EDUCEN, Ramanujan College (2025-2026)',
  'Creative Executive at EDUCEN, Ramanujan College (2024-2025)',
  'Creative Member at EDUCEN, Ramanujan College (2023-2024)',
  'Junior Coordinator / Research Member at Placement Cell, Ramanujan College (2023-2024)',
]

const projectHighlights = [
  'Use of local storage in the browser to store user location at the time of sign-in.',
  'Use of 3 different APIs: OpenWeather for weather, Unsplash for outfit ideas, and OpenAI for suggestions on self-care in that weather.',
]

function AnimatedText({ text, as: Tag = 'span', className = '', animateKey }) {
  return (
    <Tag className={className} key={animateKey}>
      {text.split('').map((character, index) => (
        <span
          key={`${character}-${index}`}
          className={character === ' ' ? 'letter-space' : 'falling-letter'}
          style={{ '--letter-delay': `${index * 0.03}s` }}
        >
          {character === ' ' ? '\u00A0' : character}
        </span>
      ))}
    </Tag>
  )
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')
  const [titleTick, setTitleTick] = useState(0)
  const [heroStyle, setHeroStyle] = useState({
    '--hero-rotate-x': '0deg',
    '--hero-rotate-y': '0deg',
    '--hero-glow-x': '50%',
    '--hero-glow-y': '50%',
  })

  useEffect(() => {
    const headingLoop = window.setInterval(() => {
      setTitleTick((current) => current + 1)
    }, 7000)

    return () => window.clearInterval(headingLoop)
  }, [])

  const changeSlide = (step) => {
    setSlideDirection(step > 0 ? 'next' : 'prev')
    setActiveSlide((current) => (current + step + slides.length) % slides.length)
    setTitleTick((current) => current + 1)
  }

  const jumpToSlide = (index) => {
    if (index === activeSlide) {
      return
    }

    setSlideDirection(index > activeSlide ? 'next' : 'prev')
    setActiveSlide(index)
    setTitleTick((current) => current + 1)
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        changeSlide(1)
      }

      if (event.key === 'ArrowLeft') {
        changeSlide(-1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const activeSection = slides[activeSlide]

  const handleHeroMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    const rotateY = (x - 0.5) * 10
    const rotateX = (0.5 - y) * 10

    setHeroStyle({
      '--hero-rotate-x': `${rotateX.toFixed(2)}deg`,
      '--hero-rotate-y': `${rotateY.toFixed(2)}deg`,
      '--hero-glow-x': `${(x * 100).toFixed(1)}%`,
      '--hero-glow-y': `${(y * 100).toFixed(1)}%`,
    })
  }

  const resetHeroMove = () => {
    setHeroStyle({
      '--hero-rotate-x': '0deg',
      '--hero-rotate-y': '0deg',
      '--hero-glow-x': '50%',
      '--hero-glow-y': '50%',
    })
  }

  const renderSlideBody = () => {
    switch (activeSection.layout) {
      case 'profile':
        return (
          <div className="profile-grid">
            <div className="stat-card floating-card" style={{ '--float-delay': '0s' }}>
              <span className="stat-value">3rd Year</span>
              <span className="stat-label">B.Voc Software Development</span>
            </div>
            <div className="stat-card floating-card" style={{ '--float-delay': '0.12s' }}>
              <span className="stat-value">Entry Level</span>
              <span className="stat-label">Open to practical software roles</span>
            </div>
            <div className="quote-card floating-card" style={{ '--float-delay': '0.2s' }}>
              <p>
                Eager to grow through practical experience, collaborative work,
                and continued learning.
              </p>
            </div>
          </div>
        )
      case 'education':
        return (
          <div className="education-list">
            {education.map((item, index) => (
              <section
                className="timeline-card floating-card"
                key={item.degree}
                style={{ '--float-delay': `${index * 0.12}s` }}
              >
                <p className="timeline-years">{item.years}</p>
                <h4>{item.degree}</h4>
                <p>{item.place}</p>
                <strong>{item.score}</strong>
              </section>
            ))}
          </div>
        )
      case 'skills':
        return (
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <section
                className="skill-card floating-card"
                key={group.label}
                style={{ '--float-delay': `${index * 0.1}s` }}
              >
                <h4>{group.label}</h4>
                <div className="pill-row">
                  {group.items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )
      case 'societies':
        return (
          <div className="society-layout">
            {societyRoles.map((role, index) => (
              <section
                className="role-card floating-card"
                key={role}
                style={{ '--float-delay': `${index * 0.1}s` }}
              >
                <span className="role-index">0{index + 1}</span>
                <p>{role}</p>
              </section>
            ))}
          </div>
        )
      case 'projects':
        return (
          <div className="project-contact-grid">
            {projectHighlights.map((highlight, index) => (
              <section
                className="project-card floating-card"
                key={highlight}
                style={{ '--float-delay': `${index * 0.14}s` }}
              >
                <p className="project-label">ASTER</p>
                <p className="project-point">{highlight}</p>
              </section>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <main className="portfolio-shell">
        <section
          className="hero-panel"
          style={heroStyle}
          onMouseMove={handleHeroMove}
          onMouseLeave={resetHeroMove}
        >
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <AnimatedText
              text="Nandini Singh"
              as="h1"
              className="hero-name"
              animateKey={`hero-${titleTick}`}
            />
            <p className="hero-lead">
              B.Voc Software Development student crafting clean frontend experiences
              and growing toward real-world product work.
            </p>
            <div className="hero-meta">
              <span>Ramanujan College, University of Delhi</span>
              <span>2023-2026/27</span>
              <span>CGPA 7.5</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-photo-stage">
              <img className="profile-photo" src={profile} alt="Nandini Singh" />
            </div>
            <p className="hero-card-title">Focus Areas</p>
            <ul className="focus-list">
              <li>Frontend development</li>
              <li>Software Development</li>
              <li>Creative collaboration</li>
              <li>Campus leadership</li>
            </ul>
          </div>
        </section>

        <section className="slideshow-panel" aria-labelledby={activeSection.id}>
          <div className="slideshow-topbar">
            <div>
              <p className="eyebrow">Resume Sections</p>
              <h2 id={activeSection.id}>{activeSection.eyebrow}</h2>
            </div>
            <div className="slideshow-controls" aria-label="Slide navigation">
              <button
                type="button"
                className="nav-button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous section"
              >
                {'<'}
              </button>
              <span className="slide-count">
                {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="nav-button"
                onClick={() => changeSlide(1)}
                aria-label="Next section"
              >
                {'>'}
              </button>
            </div>
          </div>

          <div className="slides-viewport">
            <article
              key={activeSection.id}
              className={`slide active-slide slide-${slideDirection}`}
            >
              <div className="slide-intro">
                <p className="eyebrow">{activeSection.eyebrow}</p>
                <AnimatedText
                  text={activeSection.title}
                  as="h3"
                  className="slide-title"
                  animateKey={`${activeSection.id}-${titleTick}`}
                />
                <p>{activeSection.description}</p>
              </div>
              {renderSlideBody()}
            </article>
          </div>

          <div className="dot-nav" aria-label="Choose a section">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={index === activeSlide ? 'dot active' : 'dot'}
                onClick={() => jumpToSlide(index)}
                aria-label={`Open ${slide.eyebrow}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="contact-footer">
        <a href="mailto:singh.nandini.rc@gmail.com">singh.nandini.rc@gmail.com</a>
        <a href="tel:+919971110880">+91 9971110880</a>
      </footer>
    </>
  )
}

export default App
