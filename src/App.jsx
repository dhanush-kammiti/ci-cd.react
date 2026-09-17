import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">React<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-button">Get Started</button>
      </nav>

      <main id="home" className="hero">
        <div className="hero-content">
          <p className="tag">WELCOME TO MY WEBSITE</p>

          <h1>
            Build Something
            <br />
            <span>Amazing with React</span>
          </h1>

          <p className="description">
            A modern React application built with clean code,
            beautiful design, and smooth user experience.
          </p>

          <div className="buttons">
            <button className="primary-btn">Get Started →</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="circle"></div>
          <div className="card-content">
            <div className="code-icon">&lt;/&gt;</div>
            <h2>React</h2>
            <p>Modern Web Development</p>
          </div>
        </div>
      </main>

      <section id="services" className="features">
        <div className="feature">
          <div className="icon">⚡</div>
          <h3>Fast</h3>
          <p>Lightning-fast performance with Vite.</p>
        </div>

        <div className="feature">
          <div className="icon">🎨</div>
          <h3>Beautiful</h3>
          <p>Modern and responsive user interface.</p>
        </div>

        <div className="feature">
          <div className="icon">🚀</div>
          <h3>Powerful</h3>
          <p>Build scalable applications with React.</p>
        </div>
      </section>

      <footer id="contact">
        <p>© 2026 My React App. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;