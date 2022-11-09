export const getSearchResults = async (city: string, date: string) => {
  return await fetch(
    `http://localhost:3001/products?date=${date}&city_id=${city}`
  );
};
