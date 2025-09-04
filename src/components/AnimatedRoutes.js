import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Listings from '../pages/Listings';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function AnimatedRoutes() {
  const location = useLocation(); // ✅ must be inside Router

  return (
    <AnimatePresence mode="wait">
      {/* ✅ Comments inside JSX must be wrapped like this */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
