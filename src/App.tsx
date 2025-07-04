import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />

      <main className="container mx-auto px-5 md:px-20 pb-20">
        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      <footer className="bg-gray-800 text-center py-4">
        <p>&copy; 2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
