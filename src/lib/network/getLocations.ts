export const getLocations = async () => {
  return await fetch('http://localhost:3001/locations');
};
