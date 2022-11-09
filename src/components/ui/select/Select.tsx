import { ChangeEventHandler, FunctionComponent } from 'react';
import styles from './Select.module.scss';

export interface IOption {
  label: string;
  id: string;
}

interface ISelect {
  name: string;
  label: string;
  defaultValue: string;
  isDisabled?: boolean;
  options: IOption[] | undefined;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Select: FunctionComponent<ISelect> = ({
  name,
  label,
  defaultValue,
  isDisabled,
  options,
  onChange,
}) => {
  if (!options) return null;
  let selectedOptionLabel = options[0]?.label;
  if (defaultValue) {
    const selectedOption = options.find((item) => item.id === defaultValue);
    if (selectedOption) {
      selectedOptionLabel = selectedOption.label;
    }
  }
  return (
    <div
      className={`${styles['select-container']} ${
        isDisabled && styles.disabled
      }`}
    >
      <label htmlFor={name} data-testid="select-label">
        {label}
      </label>
      <div className={styles['select-wrapper']}>
        <div className={styles['select-button']} data-testid="selected-label">
          {selectedOptionLabel}
          <span>&#9662;</span>
        </div>
        <select
          id={name}
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
          disabled={isDisabled}
          data-testid="select-element"
        >
          {options.map((item, index) => (
            <option
              data-testid="select-option"
              key={`key-${item.id}`}
              value={item.id}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
