import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MyFeeds from './pages/MyFeeds';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feeds" element={<MyFeeds />} />
        </Routes>

        <footer className="bg-gray-800 text-center py-4">
          <p>&copy; 2025. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
