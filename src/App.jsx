import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Kalash</h1>
        <p style={styles.subtitle}>DevOps Engineer | AWS | Docker </p>
      </header>

      <nav style={styles.nav}>
        <a href="#projects" style={styles.navLink}>Projects</a>
        <a href="#skills" style={styles.navLink}>Skills</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>

      <main style={styles.main}>
        <section id="projects" style={styles.section}>
          <h2 style={styles.heading}>Projects</h2>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>CI/CD Pipeline</h3>
            <p>Automated Docker & Kubernetes deployments using GitHub Actions.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Monitoring Dashboard</h3>
            <p>Built real-time monitoring with Prometheus and Grafana on Kubernetes.</p>
          </div>
        </section>

        <section id="skills" style={styles.section}>
          <h2 style={styles.heading}>Skills</h2>
          <ul style={styles.skillsList}>
            {["Docker", "Kubernetes", "Terraform", "Linux", "CI/CD", "NGINX"].map(skill => (
              <li key={skill} style={styles.skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="contact" style={styles.section}>
          <h2 style={styles.heading}>Contact</h2>
          <p>Email: <a href="mailto:johndoe@example.com" style={styles.link}>johndoe@example.com</a></p>
          <p>GitHub: <a href="https://github.com/johndoe" target="_blank" rel="noreferrer" style={styles.link}>github.com/johndoe</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer" style={styles.link}>linkedin.com/in/johndoe</a></p>
        </section>
      </main>

      <footer style={styles.footer}>
        &copy; 2025 John Doe. All rights reserved.
      </footer>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Segoe UI, sans-serif',
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    color: '#fff',
    padding: '20px',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  title: {
    fontSize: '3rem',
    color: '#f9d342'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#ccc'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px'
  },
  navLink: {
    color: '#f9d342',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  main: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  section: {
    marginBottom: '50px'
  },
  heading: {
    fontSize: '1.8rem',
    borderLeft: '4px solid #f9d342',
    paddingLeft: '10px',
    marginBottom: '20px'
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderLeft: '4px solid #f9d342',
    borderRadius: '5px',
    marginBottom: '20px'
  },
  cardTitle: {
    color: '#f9d342',
    fontSize: '1.2rem',
    marginBottom: '10px'
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    listStyle: 'none',
    padding: 0
  },
  skill: {
    backgroundColor: '#f9d342',
    color: '#000',
    padding: '8px 14px',
    borderRadius: '20px',
    fontWeight: 'bold'
  },
  link: {
    color: '#f9d342',
    textDecoration: 'none'
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    borderTop: '1px solid #333',
    paddingTop: '20px',
    fontSize: '0.9rem',
    color: '#aaa'
  }
};

export default App;
