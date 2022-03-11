import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
// prettier-ignore

describe('Footer', () => {
  test('"Profy" link points to the correct page', () => {
    render(<App />);
    const link = screen.getAllByRole('link', { name: 'Profy.dev/employers' })[0];
    userEvent.click(link);
    expect(link).toBeInTheDocument();
  });
  test('"Terms & Privacy" link points to the correct page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /terms/i });
    userEvent.click(link);
    expect(link).toBeInTheDocument();
  });
  test('"Logo" link points to the correct page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: 'footer logo' });
    userEvent.click(link);
    expect(link).toBeInTheDocument();
  });
});
