import React from 'react'
import { render, screen } from '@testing-library/react'
import CountryDetails from '../'

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useLocation: () => ({
		pathname: 'localhost:3000/country-details',
		state: null
	})
}))

test('should render correctly', () => {
	render(<CountryDetails />)
})

test('capital weather must be in document',() => {
	render(<CountryDetails />)
	const linkElement = screen.getByText(/country results/i)
  	expect(linkElement).toBeInTheDocument()
})