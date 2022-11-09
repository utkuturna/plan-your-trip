import React from 'react';
import Select, { IOption } from './Select';
import { render, screen } from '@testing-library/react';

const MOCK_OPTIONS: IOption[] = [
  {
    id: '1',
    label: 'Option 1',
  },
  {
    id: '2',
    label: 'Option 2',
  },
];

const MOCK_SELECT_PROPS = {
  name: 'test-name',
  label: 'Test Label',
  defaultValue: '2',
  isDisabled: false,
  options: MOCK_OPTIONS,
  onChange: () => {},
};

describe('Select Component', () => {
  it('renders without crashing', () => {
    render(<Select {...MOCK_SELECT_PROPS} />);
  });
  it('has label text on the screen', () => {
    render(<Select {...MOCK_SELECT_PROPS} />);
    const el = screen.getByTestId('select-label');
    expect(el).toHaveTextContent(MOCK_SELECT_PROPS.label);
  });
  it('has select element with correct id and name', () => {
    render(<Select {...MOCK_SELECT_PROPS} />);
    const el = screen.getByTestId('select-element');
    expect(el).toHaveAttribute('id', MOCK_SELECT_PROPS.name);
    expect(el).toHaveAttribute('name', MOCK_SELECT_PROPS.name);
  });
  it('has select element with correct defaultValue', () => {
    render(<Select {...MOCK_SELECT_PROPS} />);
    let options = screen.getAllByTestId('select-option');
    expect((options[1] as HTMLOptionElement).selected).toBeTruthy();
  });
  it('should show the selected value in custom design', () => {
    render(<Select {...MOCK_SELECT_PROPS} />);
    const el = screen.getByTestId('selected-label');
    expect(el).toHaveTextContent(MOCK_OPTIONS[1].label);
  });
});
