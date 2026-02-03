export default function About() {
  const skills = [
    { icon: '🎨', title: 'Graphic Design', desc: 'Digital & Print' },
    { icon: '👨🏻‍💻', title: 'Technical Support', desc: 'Customer Service' },
    { icon: '✨', title: 'Creative Direction', desc: 'Visual Strategy' },
    { icon: '📱', title: 'UI/UX Design', desc: 'Digital Experiences' },
  ]

  return (
    <section className="about" id="about">
      <h2 className="section-title text-left">About Me</h2>
      <p className="section-subtitle text-left">My journey in creative design</p>
      
      <div className="about-content grid md:grid-cols-2 gap-8 items-start">
        <div className="about-text text-justify">
          <p>
            My name is Niña Mitzi F. Romero, with over 8 years of experience in graphic design and creative direction, I work with innovative brands to bring their visions to life through thoughtful, impactful design. My approach blends contemporary trends with timeless aesthetic principles to create visuals that resonate.
          </p>
          <p>
            Alongside my creative expertise, I’m a 5-star customer service representative known for clear communication, responsiveness, and a client-first mindset. I pride myself on building strong relationships, understanding client needs, and delivering seamless experiences from concept to completion.
          </p>
          <p>
            Beyond client work, I enjoy exploring new creative techniques and mentoring emerging designers within the creative community.
          </p>
        </div>

        <div className="skills-grid grid grid-cols-2 gap-4 sm:grid-cols-1">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="stats grid grid-cols-3 gap-6 md:grid-cols-1 text-center">
        <div className="stat">
          <div className="stat-number">10+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div className="stat">
          <div className="stat-number">100+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat">
          <div className="stat-number">8+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>
    </section>
  )
}
