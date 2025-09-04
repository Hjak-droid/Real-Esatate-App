import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { fetchProperties } from '../services/api';

const PropertiesSection = ({ type }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchProperties();
      setProperties(data.filter((prop) => prop.type === type));
    };
    getProperties();
  }, [type]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Properties Available for {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;