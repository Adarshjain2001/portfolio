// App.jsx

import "./App.css";

function App() {
  return (
    <div className="page">
      <main className="shell">
        <section className="card">
          <div className="card-bar">
            <span className="brand">ADARSH JAIN</span>
            <span className="status">Coming soon</span>
          </div>

          <div className="content">
            <p className="eyebrow">Frontend Developer</p>

            <h1>
              Portfolio
              <br />
              Coming Soon.
            </h1>

            <p className="description">
              Building a better space to showcase my work and projects.
            </p>

            <div className="links">
              <a
                href="https://github.com/Adarshjain2001"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/adarshjain001"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:adarshjainoj.aj@gmail.com">
                Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;