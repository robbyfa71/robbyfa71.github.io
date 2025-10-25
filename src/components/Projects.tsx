import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'SecureAuth System',
      description: 'A full-stack authentication system with multi-factor authentication and role-based access control.',
      link: '#',
    },
    {
      title: 'QA Test Suite for E-Commerce',
      description: 'Developed a comprehensive automated testing suite for an e-commerce platform, improving bug detection by 40%.',
      link: '#',
    },
    {
      title: 'Vulnerability Scanner',
      description: 'A custom-built tool to scan web applications for common security vulnerabilities like XSS and SQL injection.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <a href={project.link} className="text-cyan-400 hover:underline mt-auto">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
