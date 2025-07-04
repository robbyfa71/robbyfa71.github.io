import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Penetration Testing', description: 'Simulating attacks to find vulnerabilities.' },
    { name: 'Vulnerability Assessment', description: 'Identifying and quantifying security weaknesses.' },
    { name: 'Security Auditing', description: 'Reviewing systems against security benchmarks.' },
    { name: 'Automated Testing', description: 'Using tools to automate quality assurance.' },
    { name: 'Manual Testing', description: 'Hands-on testing to find bugs and usability issues.' },
    { name: 'CI/CD Security', description: 'Integrating security into the deployment pipeline.' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
