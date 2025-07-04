import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
        <div className="md:w-2/3 mx-auto">
          <p className="text-lg text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
          </p>
          <a href="mailto:robbyfirdauzy@gmail.com" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-colors duration-300">Contact Me</a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
