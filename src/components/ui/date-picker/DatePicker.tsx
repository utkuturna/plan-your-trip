import { FunctionComponent } from 'react';
import DateBox from './DateBox';
import styles from './DatePicker.module.scss';

interface IDatePicker {
  dates: string[];
  isDisabled?: boolean;
  setDate: Function;
  selectedDate: string | undefined;
}

const DatePicker: FunctionComponent<IDatePicker> = ({
  dates,
  isDisabled,
  setDate,
  selectedDate,
}) => {
  return (
    <div
      className={`${styles.picker}${isDisabled ? ' ' + styles.disabled : ''}`}
    >
      <label>DATE</label>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {dates.map((item) => (
            <DateBox
              key={item}
              date={item}
              onClick={() => setDate(item)}
              active={selectedDate === item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
