import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // New import
import PropertyCard from '../components/PropertyCard';
import { fetchProperties } from '../services/api';

const pageVariants = {
  initial: { opacity: 0, x: 100 }, // Slide in from right
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring', stiffness: 120 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } } // Exit to left
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Stagger card animations
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchProperties();
      setProperties(data);
    };
    getProperties();
  }, []);

  const filteredProperties = properties.filter((prop) => {
    if (filter === 'all') return true;
    return prop.type === filter;
  });

  return (
    <motion.div
      className="container mx-auto py-10"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Property Listings
      </motion.h1>
      <motion.div
        className="flex justify-center space-x-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <button onClick={() => setFilter('all')} className="bg-blue-600 text-white p-2 rounded">All</button>
        <button onClick={() => setFilter('sale')} className="bg-blue-600 text-white p-2 rounded">Sale</button>
        <button onClick={() => setFilter('rent')} className="bg-blue-600 text-white p-2 rounded">Rent</button>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProperties.map((prop) => (
          <motion.div key={prop.id} variants={cardVariants}>
            <PropertyCard property={prop} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Listings;