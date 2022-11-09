import { FunctionComponent, useEffect, useState } from 'react';
import ResultItem, { IResultItem } from './ResultItem';
import styles from './Results.module.scss';
import { getSearchResults } from '../../../lib/network/getSearchResults';

interface IResults {
  city: string | undefined;
  date: string | undefined;
}

const Results: FunctionComponent<IResults> = ({ city, date }) => {
  const [results, setResults] = useState<IResultItem[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!city || !date) return setResults(null);
    setIsLoading(true);
    getSearchResults(city, date)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city, date]);

  /* @todo implement loading spinner */
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      {!city && !date && !results && (
        <div className={styles.nofilter}>Select filters first</div>
      )}
      {results && results.length === 0 && (
        <div className={styles.nofilter}>No results for this search</div>
      )}
      {results && results.map((item) => <ResultItem key={item.id} {...item} />)}
    </div>
  );
};

export default Results;
