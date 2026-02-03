import { useState } from 'react'
import { X } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    { id: 1, title: "T-Shirt Design 1", image: "/TShirt Design 1.png", category: "Apparel Design" },
    { id: 2, title: "T-Shirt Design 2", image: "/TShirt Design 2.png", category: "Apparel Design" },
    { id: 3, title: "T-Shirt Design 3", image: "/TShirt Design 3.png", category: "Apparel Design" },
    { id: 4, title: "T-Shirt Design 4", image: "/TShirt Design 4.png", category: "Apparel Design" },
    { id: 5, title: "T-Shirt Design 5", image: "/TShirt Design 5.png", category: "Apparel Design" },
    { id: 6, title: "T-Shirt Design 6", image: "/TShirt Design 6.png", category: "Apparel Design" }
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container px-6 py-12">
        <h2 className="section-title text-left">Featured Projects</h2>
        <p className="section-subtitle text-left">A selection of my creative work</p>

        <div className="projects-grid grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {projects.map(project => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-card"
            >
              <img src={project.image} alt={project.title} />
              <div className="project-overlay flex items-end">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={28} />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <div className="modal-text">
              <h2>{selectedProject.title}</h2>
              <div className="modal-category">{selectedProject.category}</div>
              <p>
                This is a premium design project showcasing modern aesthetics and creative vision. Each element has been carefully crafted to deliver maximum impact and visual appeal to the target audience.
              </p>
              <button className="btn-primary premium-button" style={{width: '100%'}}>
                <span>Inquire About Similar Work</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
