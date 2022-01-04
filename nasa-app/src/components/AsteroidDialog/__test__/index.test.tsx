import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import AsteroidDialog from '../'

const handleClose = jest.fn()

const dialogData = {
	name: 'test',
	nasaJplUrl: 'https://demo.com',
	isPotentiallyHazardous: false
}

test('should render component correctly', () => {
	render(<AsteroidDialog
		open={true}
		handleClose={handleClose}
		dialogData={dialogData}/>)
})

test('must be close button in dialog', () => {
	render(<AsteroidDialog
		open={true}
		handleClose={handleClose}
		dialogData={dialogData}/>)
	const closeButton = screen.getByText(/close/i)
	expect(closeButton).toBeEnabled()
})

test('clicking close button must call handleClose', () => {
	render(<AsteroidDialog
		open={true}
		handleClose={handleClose}
		dialogData={dialogData}/>)
	const closeButton = screen.getByText(/close/i)
	fireEvent.click(closeButton)
	expect(handleClose).toBeCalled()
})