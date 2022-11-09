import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });
  it('has a h1 tag with correct text', () => {
    render(<Header />);
    const h1 = screen.getByTestId('title');
    expect(h1).toHaveTextContent('Plan Your Trip!');
  });
});
