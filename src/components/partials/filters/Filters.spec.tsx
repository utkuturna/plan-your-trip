import React from 'react';
import Filters from './Filters';
import { render, screen } from '@testing-library/react';

const MOCK_FILTER_PROPS = {
  updateFilters: () => {},
};

describe('Filter Component', () => {
  it('renders without crashing', () => {
    render(<Filters {...MOCK_FILTER_PROPS} />);
  });
});
