import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/robbyfa71' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/robby-firdauzy-15373819a/' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/robby.f_a/' },
  { icon: <FaMedium />, href: 'https://medium.com/@robbyfirdauzy' },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
