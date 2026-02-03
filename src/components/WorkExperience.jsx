import React, { useState } from 'react'

export default function WorkExperience() {
  const [view, setView] = useState('grid')

  const experiences = [
    {
      id: 1,
      company: "CAKES Body",
      role: "Customer Service Representative",
      image: "/CAKES Body Logo.png"
    },
    {
      id: 2,
      company: "Receipt Banch",
      role: "Social Media Manager",
      image: "/Receipt Banch Logo.png"
    },
    {
      id: 3,
      company: "Scrub Daddy",
      role: "Customer Service Representative",
      image: "/Scrub Daddy Logo.png"
    },
    {
      id: 4,
      company: "Swole Panda",
      role: "Operations Assistant",
      image: "/Swole Panda Logo.png"
    }

  ]

  return (
    <section className="work-experience">
      <div className="section-header flex items-center justify-between">
        <div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Trusted by industry leaders</p>
        </div>

        <div className="controls flex items-center gap-2">
          <button
            onClick={() => setView('grid')}
            className={`px-3 py-1 rounded ${view === 'grid' ? 'bg-accent-purple text-white' : 'bg-transparent border border-white/10'}`}>
            Grid
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-3 py-1 rounded ${view === 'list' ? 'bg-accent-purple text-white' : 'bg-transparent border border-white/10'}`}>
            List
          </button>
        </div>
      </div>

      <div className={`${view === 'grid' ? 'grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1' : 'flex flex-col gap-4'} experience-grid`}>
        {experiences.map(exp => (
          <div key={exp.id} className={`${view === 'list' ? 'flex items-center justify-between gap-4 p-3' : ''} experience-card`}>
            <img src={exp.image} alt={exp.company} />
            <div className="exp-info">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
