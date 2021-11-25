import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'routes/Home';
import About from 'routes/About';
import Contact from 'routes/Contact';
import Projects from 'routes/Projects';

const Router = () => (
  <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </HashRouter>
);

export default Router;
