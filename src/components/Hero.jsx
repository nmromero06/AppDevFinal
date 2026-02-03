export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content flex flex-col md:flex-row items-center gap-8 px-6 py-12">
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/Mitzi.png" alt="Mitzi" className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-full object-cover mx-auto" />
          </div>
        </div>

        <div className="hero-text text-center md:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Hi, I'm <span className="gradient">Mitzi</span>
          </h1>
          <p className="mt-2 text-lg text-gray-300">Customer Service Representative || Creative Designer || Visual Artist</p>

          <div className="hero-badges flex justify-center md:justify-start mt-4">
            <span className="badge">✨ A+ Graphic Designer</span>
          </div>

          <div className="mt-4 mb-6 text-center md:text-left">
            <div className="text-yellow-400 text-xl mb-1">★★★★★</div>
            <p className="text-gray-400">Trusted by 4+ brands</p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            I create visually compelling experiences that help brands stand out and connect with their audience. With a strong background in graphic design, branding, and creative direction, I turn ideas into impactful designs. Alongside my creative skills, I’m a 5-star customer service representative who values professionalism, responsiveness, and client satisfaction.
          </p>

          <div className="hero-buttons flex items-center gap-4 justify-center md:justify-start mt-6">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary premium-button"
            >
              <span>Let's Work Together</span>
            </button>
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
