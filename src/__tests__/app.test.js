import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock fetch for the tests
beforeAll(() => {
  global.fetch = jest.fn((url) =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]), // Mock response with an empty array
    })
  );
});

test('renders the App component and displays Helpdesk', async () => {
  await act(async () => {
    render(<App />);
  });

  const linkElement = screen.getByText(/Helpdesk/i);
  expect(linkElement).toBeInTheDocument();
});



test('renders the App component and displays Search', async () => {
  await act(async () => {
    render(<App />);
  });

  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});


