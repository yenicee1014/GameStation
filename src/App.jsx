import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';
import Changelog from './Changelog';
import Walkthrough from './Walkthrough';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/:slug" element={<Walkthrough />} />
      </Routes>
    </Router>
  );
}