import { motion } from 'framer-motion';
import { FaShieldAlt, FaSearch, FaClipboardCheck, FaRobot, FaUserCheck, FaCogs } from 'react-icons/fa';

const Skills = () => {
    const skills = [
    { name: 'Penetration Testing', description: 'Simulating attacks to find vulnerabilities.', icon: <FaShieldAlt /> },
    { name: 'Vulnerability Assessment', description: 'Identifying and quantifying security weaknesses.', icon: <FaSearch /> },
    { name: 'Security Auditing', description: 'Reviewing systems against security benchmarks.', icon: <FaClipboardCheck /> },
    { name: 'Automated Testing', description: 'Using tools to automate quality assurance.', icon: <FaRobot /> },
    { name: 'Manual Testing', description: 'Hands-on testing to find bugs and usability issues.', icon: <FaUserCheck /> },
    { name: 'CI/CD Security', description: 'Integrating security into the deployment pipeline.', icon: <FaCogs /> },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 transform transition-transform duration-300 hover:border-cyan-400 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-cyan-400 text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
