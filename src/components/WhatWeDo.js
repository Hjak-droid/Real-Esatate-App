import React from 'react';
import { motion } from 'framer-motion'; // New import

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Stagger each card
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring' } }
};

const WhatWeDo = () => {
  const cards = [
    { title: 'Buy Properties', desc: 'Find homes to purchase.' },
    { title: 'Rent Properties', desc: 'Discover rental options.' },
    { title: 'Sell Properties', desc: 'List your property for sale.' },
    { title: 'Invest', desc: 'Real estate investment opportunities.' },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-lg text-center"
              variants={cardVariants}
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;