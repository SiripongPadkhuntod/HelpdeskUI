import '@testing-library/jest-dom';
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), // Mock response data
  })
);

// Add a sample test to avoid the "Your test suite must contain at least one test" error
test('setup test', () => {
  expect(true).toBe(true);
});
