import { useEffect, useState } from 'react'
import profile from './assets/profile.png';
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

function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setActiveSlide((current) => (current + 1) % slides.length)
      }

      if (event.key === 'ArrowLeft') {
        setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const activeSection = slides[activeSlide]

  return (
    <>
      <main className="portfolio-shell">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Nandini Singh</h1>
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
            <img className="profile-photo" src={profile} alt="Nandini Singh" />
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
                onClick={() =>
                  setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
                }
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
                onClick={() => setActiveSlide((current) => (current + 1) % slides.length)}
                aria-label="Next section"
              >
                {'>'}
              </button>
            </div>
          </div>

          <div className="slides-viewport">
            <div
              className="slides-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              <article className="slide profile-slide">
                <div className="slide-intro">
                  <p className="eyebrow">{slides[0].eyebrow}</p>
                  <h3>{slides[0].title}</h3>
                  <p>{slides[0].description}</p>
                </div>
                <div className="profile-grid">
                  <div className="stat-card">
                    <span className="stat-value">3rd Year</span>
                    <span className="stat-label">B.Voc Software Development</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">Entry Level</span>
                    <span className="stat-label">Open to practical software roles</span>
                  </div>
                  <div className="quote-card">
                    <p>
                      Eager to grow through practical experience, collaborative work,
                      and continued learning.
                    </p>
                  </div>
                </div>
              </article>

              <article className="slide">
                <div className="slide-intro">
                  <p className="eyebrow">{slides[1].eyebrow}</p>
                  <h3>{slides[1].title}</h3>
                  <p>{slides[1].description}</p>
                </div>
                <div className="education-list">
                  {education.map((item) => (
                    <section className="timeline-card" key={item.degree}>
                      <p className="timeline-years">{item.years}</p>
                      <h4>{item.degree}</h4>
                      <p>{item.place}</p>
                      <strong>{item.score}</strong>
                    </section>
                  ))}
                </div>
              </article>

              <article className="slide">
                <div className="slide-intro">
                  <p className="eyebrow">{slides[2].eyebrow}</p>
                  <h3>{slides[2].title}</h3>
                  <p>{slides[2].description}</p>
                </div>
                <div className="skills-grid">
                  {skillGroups.map((group) => (
                    <section className="skill-card" key={group.label}>
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
              </article>

              <article className="slide">
                <div className="slide-intro">
                  <p className="eyebrow">{slides[3].eyebrow}</p>
                  <h3>{slides[3].title}</h3>
                  <p>{slides[3].description}</p>
                </div>
                <div className="society-layout">
                  {societyRoles.map((role, index) => (
                    <section className="role-card" key={role}>
                      <span className="role-index">0{index + 1}</span>
                      <p>{role}</p>
                    </section>
                  ))}
                </div>
              </article>

              <article className="slide">
                <div className="slide-intro">
                  <p className="eyebrow">{slides[4].eyebrow}</p>
                  <h3>{slides[4].title}</h3>
                  <p>{slides[4].description}</p>
                </div>
                <div className="project-contact-grid">
                  {projectHighlights.map((highlight, index) => (
                    <section className="project-card" key={highlight}>
                      <p className="project-label">ASTER</p>
                      <p className="project-point">{highlight}</p>
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </div>

          <div className="dot-nav" aria-label="Choose a section">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={index === activeSlide ? 'dot active' : 'dot'}
                onClick={() => setActiveSlide(index)}
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
