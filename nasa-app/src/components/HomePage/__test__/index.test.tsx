import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import HomePage from '../'

test('should render component correctly', () => {
	render(<HomePage />)
})

describe('id field tests', () => {

	test('initially asteroid id field must be empty', () => {
		render(<HomePage />)
		const idField = screen.getByPlaceholderText(/enter asteroid id/i)
		expect(idField).toHaveAttribute('value', '')
	})

	test('changing value of id must be change state', () => {
		render(<HomePage />)
		const idField = screen.getByPlaceholderText(/enter asteroid id/i)
		fireEvent.change(idField, { target: { value: '85154' } })
		expect(idField).toHaveAttribute('value', '85154')

	})

})

describe('submit button tests', () => {

	test('initially submit button must be disabled', () => {
		render(<HomePage />)
		const submitButton = screen.getByText(/submit/i)
		expect(submitButton).toBeDisabled()
	})

	test('submit button must be enable after typing value in id field', () => {
		render(<HomePage />)
		const submitButton = screen.getByText(/submit/i)
		const idField = screen.getByPlaceholderText(/enter asteroid id/i)
		fireEvent.change(idField, { target: { value: '85154' } })
		expect(submitButton).toBeEnabled()
	})

})

test('random asteroid button must be enabled', () => {
	render(<HomePage />)
	const randomButton = screen.getByText(/random asteroid/i)
	expect(randomButton).toBeEnabled()
})
