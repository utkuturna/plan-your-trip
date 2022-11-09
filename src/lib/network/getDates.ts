export const getDates = async () => {
  return await fetch('http://localhost:3001/available_dates');
};
