import styles from './DateBox.module.scss';
import { FunctionComponent, MouseEventHandler } from 'react';

interface IDateBox {
  date: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}

const DateBox: FunctionComponent<IDateBox> = ({ date, onClick, active }) => {
  const dateObj = new Date(date);

  return (
    <div
      className={`${styles.box}${active ? ' ' + styles.active : ''}`}
      onClick={onClick}
    >
      <div className={styles.day}>
        {dateObj.toLocaleString('default', { weekday: 'short' }).toUpperCase()}
      </div>
      <div className={styles.date}>{dateObj.getDate()}</div>
    </div>
  );
};

export default DateBox;
