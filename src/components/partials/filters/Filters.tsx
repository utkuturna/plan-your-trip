import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import styles from './Filters.module.scss';
import Select, { IOption } from '../../ui/select/Select';
import { getLocations } from '../../../lib/network/getLocations';
import DatePicker from '../../ui/date-picker/DatePicker';
import { getDates } from '../../../lib/network/getDates';

interface IFilters {
  updateFilters: Function;
}

const EMPTY_COUNTRY = {
  label: 'Choose a country',
  id: '',
};

const EMPTY_CITY = {
  label: 'Choose a city',
  id: '',
};

const Filters: FunctionComponent<IFilters> = ({ updateFilters }) => {
  const [locations, setLocations] = useState<any | null>(null);
  const [countries, setCountries] = useState<IOption[] | undefined>();
  const [cities, setCities] = useState<IOption[] | undefined>();
  const [dates, setDates] = useState<string[] | undefined>();
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [date, setDate] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const populateLocations = () => {
    clearAllFields();
    setIsLoading(true);
    getLocations()
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
        const countryArray = Object.keys(data).map((key) => ({
          label: key,
          id: key,
        }));
        setCountries([EMPTY_COUNTRY, ...countryArray]);
        setCities([EMPTY_CITY]);
        // get dates after we get the locations info
        populateDates();
      })
      .catch((error) => {
        /* @todo implement better error handling */
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const clearAllFields = () => {
    setCountry('');
    setCity('');
    setDate('');
    setCities([EMPTY_CITY]);
    handleFilterChange('', '');
  };

  const populateDates = () => {
    getDates()
      .then((response) => response.json())
      .then((data) => {
        setDates(data);
      });
    /* @todo implement better error handling */
  };

  useEffect(() => {
    // Get locations and dates when component mounted
    populateLocations();
  }, []);

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
    setCities([EMPTY_CITY]);
    setCity('');
    setDate('');
    updateFilters(null, null);
    if (!event.target.value) {
      return;
    }
    const citiesArray = locations[event.target.value].map(
      (item: Array<[number, string]>) => ({
        id: item[0].toString(),
        label: item[1],
      })
    );
    setCities([EMPTY_CITY, ...citiesArray]);
  };

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCity((state) => {
      state = event.target.value;
      updateFilters(null, null);
      return state;
    });
  };

  const updateDate = (date: string) => {
    setDate((state) => {
      state = date;
      // Get results after user sets a new date
      return state;
    });
    handleFilterChange(city, date);
  };

  const handleFilterChange = (city: string, date: string) => {
    updateFilters(city, date);
  };

  /* @todo implement a loading spinner */
  if (isLoading && !locations) return <div>Loading...</div>;

  return (
    <div className={styles['filter-container']}>
      <div className={styles['filter-location']}>
        <div>
          <Select
            name={'country'}
            label={'COUNTRY'}
            onChange={handleCountryChange}
            defaultValue={country}
            options={countries}
            isDisabled={isLoading}
          />
        </div>
        <div>
          <Select
            name={'city'}
            label={'CITY'}
            onChange={handleCityChange}
            defaultValue={city}
            options={cities}
            isDisabled={!country}
          />
        </div>
      </div>

      {dates && (
        <DatePicker
          dates={dates}
          isDisabled={!city}
          setDate={(date: string) => updateDate(date)}
          selectedDate={date}
        />
      )}
    </div>
  );
};

export default Filters;
