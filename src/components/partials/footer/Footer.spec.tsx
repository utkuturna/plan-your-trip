import React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });
  it('has a h1 tag with correct text', () => {
    render(<Footer />);
    const div = screen.getByTestId('copyright');
    expect(div).toHaveTextContent('© 2014-2021 Tiqets Amsterdam');
  });
});
