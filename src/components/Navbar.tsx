import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'My Feeds', href: '/feeds' },
  ];

  useEffect(() => {
    // If there's a hash in the URL and we're on the home page, scroll to it
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
  };

  return (
    <>
      <header className="bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">Robby Firdauzy A.</div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                className="hover:text-cyan-400 transition-colors duration-300"
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    if (location.pathname !== '/') {
                      navigate(`/${link.href}`);
                    } else {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gray-900 shadow-lg z-50 md:hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
              <nav className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                    className="text-2xl hover:text-cyan-400 transition-colors duration-300"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        setIsOpen(false);
                        if (location.pathname !== '/') {
                          navigate(`/${link.href}`);
                        } else {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
