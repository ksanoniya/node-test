import React from "react";

const projects = [
  {
    title: "CI/CD Pipeline",
    description: "Automated build and deployment with GitHub Actions and Kubernetes.",
  },
  {
    title: "Infrastructure as Code",
    description: "Provisioned AWS infrastructure using Terraform with reusable modules.",
  },
  {
    title: "Monitoring Dashboard",
    description: "Live monitoring setup using Prometheus and Grafana.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white font-sans">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-lg text-slate-400">DevOps Engineer | AWS | Kubernetes | CI/CD</p>
      </header>

      <nav className="flex justify-center gap-6 text-sm py-2 border-t border-slate-700 border-b bg-slate-900">
        <a href="#projects" className="hover:text-yellow-300">Projects</a>
        <a href="#skills" className="hover:text-yellow-300">Skills</a>
        <a href="#contact" className="hover:text-yellow-300">Contact</a>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-yellow-400 pl-3">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-5 shadow-md">
                <h3 className="text-yellow-300 text-lg font-semibold">{proj.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-yellow-400 pl-3">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Docker", "Kubernetes", "Ansible", "Terraform", "GitHub Actions", "AWS", "Linux"].map((skill) => (
              <span key={skill} className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-yellow-400 pl-3">Contact</h2>
          <p className="text-slate-300">Email: <a className="text-yellow-300" href="mailto:johndoe@example.com">johndoe@example.com</a></p>
          <p className="text-slate-300">GitHub: <a className="text-yellow-300" href="https://github.com/johndoe" target="_blank" rel="noreferrer">github.com/johndoe</a></p>
          <p className="text-slate-300">LinkedIn: <a className="text-yellow-300" href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer">linkedin.com/in/johndoe</a></p>
        </section>
      </main>

      <footer className="text-center text-sm text-slate-500 py-6 border-t border-slate-700">
        &copy; 2025 John Doe. All rights reserved.
      </footer>
    </div>
  );
}
