import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
// prettier-ignore

describe('Header', () => {
  test('"Search" link points to the correct page', () => {
    render(<App />);
    const link = screen.getAllByRole('link', { name: /search/i })[0];
    userEvent.click(link);
    expect(link).toBeInTheDocument();
  });
  test('"How it works" link points to the correct page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(link);
    expect(link).toBeInTheDocument();
  });
  test('"About" link points to the correct page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /about/i });
    userEvent.click(link);
    expect(link).toBeInTheDocument();
  });
  test('"Logo" link points to the correct page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: 'logo' });
    userEvent.click(link);
    expect(link).toBeInTheDocument();
  });
});

// describe('Subreddit form', () => {
//   test('loads posts and renders them on the page', async () => {
//     fetch.once(JSON.stringify(mockResponse));
//     setup();

//     const subredditInput = screen.getByLabelText('r /');
//     userEvent.type(subredditInput, 'reactjs');

//     const submitButton = screen.getByRole('button', { name: /search/i });
//     userEvent.click(submitButton);

//     expect(screen.getByText(/is loading/i)).toBeInTheDocument();

//     expect(
//       await screen.findByText(/Number of top posts: 25/i)
//     ).toBeInTheDocument();
//     expect(fetch).toHaveBeenCalledWith(
//       'https://www.reddit.com/r/reactjs/top.json'
//     );
//   });
// });
