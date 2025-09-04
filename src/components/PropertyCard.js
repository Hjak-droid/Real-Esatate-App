import React from 'react';
import { motion } from 'framer-motion'; // New import

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }} // Scale and shadow on hover
      whileTap={{ scale: 0.95 }} // Slight shrink on tap
      transition={{ duration: 0.3 }}
    >
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{property.name}</h3>
        <p>{property.buildingNumber} {property.city}, {property.state}, {property.country}</p>
        <p>Contact: {property.contactNumber}</p>
        <p className="capitalize">For {property.type}</p>
      </div>
    </motion.div>
  );
};

export default PropertyCard;