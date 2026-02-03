export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-6 py-8">
      <div className="footer-content flex items-start justify-between md:flex-col md:items-start gap-8">
        <div className="footer-brand text-left">
          <h3>Mitzi</h3>
          <p>Creative designer & visual artist creating stunning experiences for brands worldwide.</p>
        </div>
        <div className="footer-links flex gap-12">
          <div className="footer-section text-left">
            <h4>Quick Links</h4>
            <div className="flex flex-col gap-2">
              <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button>
              <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
              <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
            </div>
          </div>
          <div className="footer-section text-left">
            <h4>Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-8 flex items-center justify-between md:flex-col md:items-start gap-4">
        <p>&copy; {currentYear} Mitzi. All rights reserved.</p>
        <p className="flex items-center gap-2">Crafted with <span style={{color: '#ff69b4'}}>♥</span> & passion</p>
      </div>
    </footer>
  )
}
