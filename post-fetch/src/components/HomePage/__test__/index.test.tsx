import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../'

const mock =  function() {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn()
  };
};

window.IntersectionObserver = mock;

test('all four columns must be in dom', () => {
  render(<HomePage />);
  const titleColumn = screen.getByText(/title/i)
  const urlColumn = screen.getByText(/url/i)
  const createdAtColumn = screen.getByText(/created at/i)
  const authorColumn = screen.getByText(/author/i)
  expect(titleColumn).toBeInTheDocument()
  expect(urlColumn).toBeInTheDocument()
  expect(createdAtColumn).toBeInTheDocument()
  expect(authorColumn).toBeInTheDocument()
})