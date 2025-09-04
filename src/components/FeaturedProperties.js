import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { fetchProperties } from '../services/api';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchProperties();
      setProperties(data.slice(0, 4)); // Featured: first 4
    };
    getProperties();
  }, []);

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;