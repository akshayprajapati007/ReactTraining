import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import HomePage from '../'

test('should render component correctly', () => {
	render(<HomePage />)
})

test('initially submit button shoud be disabled', () => {
	render(<HomePage />)
	expect(screen.getByText(/submit/i)).toBeDisabled()
})

test('after enter country value submit button must be enabled', () => {
	render(<HomePage />)
	fireEvent.change(screen.getByPlaceholderText(/enter country/i), { target: { value: 'india' } })
	expect(screen.getByText(/submit/i)).toBeEnabled()
})