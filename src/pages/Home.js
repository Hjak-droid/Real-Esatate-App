import React from 'react';
import { motion } from 'framer-motion'; // New import
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertiesSection from '../components/PropertiesSection';
import Newsletter from '../components/Newsletter';

const pageVariants = {
  initial: { opacity: 0, y: 50 }, // Start faded and below
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } } // Exit by fading up
};

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
        <WhatWeDo />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
        <FeaturedProperties />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
        <PropertiesSection type="sale" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
        <PropertiesSection type="rent" />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.8 }}>
        <Newsletter />
      </motion.div>
    </motion.div>
  );
};

export default Home;