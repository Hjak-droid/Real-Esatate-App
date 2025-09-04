const API_URL = 'https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing';

export const fetchProperties = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  // Add type dynamically since not in API
  return data.map((prop) => ({
    ...prop,
    type: parseInt(prop.id) % 2 === 0 ? 'rent' : 'sale',
  }));
};