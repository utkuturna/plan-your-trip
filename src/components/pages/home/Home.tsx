import Filters from '../../partials/filters/Filters';
import styles from './Home.module.scss';
import Results from '../../partials/results/Results';
import { useState } from 'react';

const Home = () => {
  const [city, setCity] = useState<string>();
  const [date, setDate] = useState<string>();

  const handleUpdateFilters = (city: string, date: string) => {
    setDate(date);
    setCity(city);
  };

  return (
    <>
      <div className={styles.container}>
        <Filters updateFilters={handleUpdateFilters} />
      </div>
      <div className={styles.divider} />
      <div className={styles.container}>
        <Results city={city} date={date} />
      </div>
    </>
  );
};

export default Home;
