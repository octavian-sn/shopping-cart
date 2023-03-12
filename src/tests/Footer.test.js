import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('Footer component', () => {
  it('renders logo in the footer component', () => {
    render(<Footer />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });
});
