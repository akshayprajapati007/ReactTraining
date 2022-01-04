import axios from 'axios'
import { NASA_KEY } from '../configs'

export const FindRandomId = async () => {
	try {
		const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${NASA_KEY}`)
		return response
	} catch(error) {
		console.log(error)
	}
}

export const FindAsteroidDetails = async (id: string) => {
	try {
		const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${NASA_KEY}`)
		return response
	} catch(error) {
		console.log(error)
	}
}