import React from 'react';
import { render, screen } from '@testing-library/react';
import PostDetails from '../'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/post-details",
    state: null
  })
}));

test('should render component correctly', () => {
  render(<PostDetails />)
})

test('should render heading correctly', () => {
  render(<PostDetails />)
  const heading = screen.getByText(/post details/i)
  expect(heading).toBeInTheDocument()
})

test('data should be null initially', () => {
  render(<PostDetails />)
  const heading = screen.getByTestId('title-tag')
  expect(heading).toHaveTextContent('Title :')
})